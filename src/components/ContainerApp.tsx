import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { typesOfSlots } from '../types/index'
import AddButton from './AddSlot'
import styles from './ContainerApp.module.scss'
import EmptySlot from './EmptySlot'
import ConfigurationIcon from './icons/ConfigurationIcon'
import DeleteIcon from './icons/DeleteIcon'
import ShortcutSlot from './ShorcutSlot'

const ContainerApp = () => {
  const INITIAL_STATE: typesOfSlots[] = []

  const [icons, setIcons] = useState(INITIAL_STATE)
  // console.log(icons)
  useEffect(() => {
    if (!localStorage.getItem('info')) {
      const numerosDeGrillasMaximoALoAncho = Math.floor((window.innerWidth - 16 * 4) / (7 * 16))
      const numerosDeGrillasMaximoALoAlto = Math.floor(window.innerHeight / (7.5 * 16))

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

  return (
    <main className={styles.containerApp}>
      <section className={styles.gridTemplate}>
        {icons.map((icon) => {
          switch (icon.type) {
            case 'empty':
              return <EmptySlot key={icon.id} id={icon.id} setIcons={setIcons} icons={icons} />
            case 'buttonAdd':
              return <AddButton key={icon.id} id={icon.id} setIcons={setIcons} icons={icons} />
            case 'shortcut':
              return <ShortcutSlot key={icon.id} id={icon.id} />
            default:
              throw new Error('No se contempla este typo de slot')
          }
        })}
      </section>
      <nav className={styles.navSection}>
        <DeleteIcon className={styles.deleteIcon} />
        <ConfigurationIcon className={styles.configIcon} />
      </nav>
    </main>
  )
}

export default ContainerApp
