import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { typesOfSlots } from '../types/index'
import styles from './ContainerApp.module.scss'
const ContainerApp = () => {
  const INITIAL_STATE: typesOfSlots[] = []

  const [icons, setIcons] = useState(INITIAL_STATE)
  // console.log(icons)
  useEffect(() => {
    if (!localStorage.getItem('info')) {
      const numerosDeGrillasMaximoALoAncho = Math.floor((window.innerWidth - 16 * 4) / (6 * 16))
      const numerosDeGrillasMaximoALoAlto = Math.floor(window.innerHeight / (6 * 16))

      const numeroDeGrillasMaximas = numerosDeGrillasMaximoALoAncho * numerosDeGrillasMaximoALoAlto

      const newarr: typesOfSlots[] = []

      for (let i = 0; i < numeroDeGrillasMaximas; i++) {
        const id = nanoid()
        // console.log(id)
        if (i !== 0) newarr.push({ type: 'empty', id })
        else newarr.push({ id, type: 'buttonAdd' })
      }

      setIcons(newarr)
    }
  }, [])

  const EmptySlot = ({ children, id }) => {
    return (
      <div
        className={styles.icon}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        id={id}
        onDrop={(e) => {
          const getDataId = e.dataTransfer.getData('text/plan')
          const getCurrentTargetId = e.target.id

          const newIcons = [...icons]

          const DragElement = newIcons.find((e) => e.id === getDataId)
          const DropElement = newIcons.find((e) => e.id === getCurrentTargetId)

          const DragElementIndex = newIcons.findIndex((e) => e.id === getDataId)
          const DropElementIndex = newIcons.findIndex((e) => e.id === getCurrentTargetId)

          newIcons[DropElementIndex] = DragElement
          newIcons[DragElementIndex] = DropElement

          setIcons(newIcons)
        }}
      >
        {children}
      </div>
    )
  }

  function addNewFolder(id: string) {
    const newIcons = [...icons]
    const indexOfAddButton = newIcons.findIndex((e) => e.id === id)

    const pedazoParaComprobar = newIcons.slice(0, indexOfAddButton)

    if (!pedazoParaComprobar.some((e) => e.type === 'empty')) {
      newIcons[indexOfAddButton] = { id, type: 'shortcut' }

      const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

      if (indexOfFirstEmpty >= 0) {
        newIcons[indexOfFirstEmpty] = {
          id: newIcons[indexOfFirstEmpty].id,
          type: 'buttonAdd',
        }
      }
    } else {
      const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

      newIcons[indexOfFirstEmpty] = {
        id: newIcons[indexOfFirstEmpty].id,
        type: 'shortcut',
      }
      console.log(indexOfFirstEmpty)
    }
    console.log(newIcons)
    setIcons(newIcons)
  }

  const Add = ({ children, id }) => {
    return (
      <button className={styles.icon} onClick={() => addNewFolder(id)} id={id}>
        {children}
      </button>
    )
  }
  const Shortcut = ({ children, id }) => {
    return (
      <div
        className={styles.icon}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plan', e.target.id)
          console.log(e.dataTransfer)
        }}
        id={id}
      >
        {children}
      </div>
    )
  }
  return (
    <main className={styles.containerApp}>
      <section className={styles.gridTemplate}>
        {icons.map((icon) => {
          switch (icon.type) {
            case 'empty':
              return (
                <EmptySlot key={icon.id} id={icon.id}>
                  empty
                </EmptySlot>
              )
            case 'buttonAdd':
              return (
                <Add key={icon.id} id={icon.id}>
                  add
                </Add>
              )
            case 'shortcut':
              return (
                <Shortcut key={icon.id} id={icon.id}>
                  Shortcut
                </Shortcut>
              )

            default:
              throw new Error('No se contempla este typo de slot')
          }
        })}
      </section>
      <nav className={styles.navSection}>sasdasdasdasd</nav>
    </main>
  )
}

export default ContainerApp
