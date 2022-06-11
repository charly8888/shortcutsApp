import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { typesOfSlots } from '../types/index'
import AddSlot from './AddSlot'
import styles from './ContainerApp.module.scss'
import EmptySlot from './EmptySlot'
import AddIcon from './icons/AddIcon'
import ConfigurationIcon from './icons/ConfigurationIcon'
import DeleteIcon from './icons/DeleteIcon'
import PortalShortcut from './portals/PortalShortcut'
import ShortcutSlot from './ShorcutSlot'

const ContainerApp = () => {
  const INITIAL_STATE: typesOfSlots[] = []

  const [icons, setIcons] = useState(INITIAL_STATE)
  const [modalShortcut, setModalShortcut] = useState({ boolean: false, id: '' })
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
              return (
                <AddSlot
                  key={icon.id}
                  openPortal={() => setModalShortcut({ boolean: true, id: icon.id })}
                />
              )
            case 'shortcut':
              return (
                <ShortcutSlot
                  key={icon.id}
                  id={icon.id}
                  title={icon.title}
                  description={icon.description}
                  link={icon.link}
                />
              )
            default:
              throw new Error('No se contempla este typo de slot')
          }
        })}
      </section>
      <nav className={styles.navSection}>
        <DeleteIcon className={styles.deleteIcon} />
        {/* <AddIcon onClick={() => setModalShortcut({ boolean: true})}/> */}
        <ConfigurationIcon className={styles.configIcon} />
      </nav>
      {modalShortcut.boolean && (
        <PortalShortcut
          setIcons={setIcons}
          icons={icons}
          modalShortcut={modalShortcut}
          closePortal={() => setModalShortcut({ boolean: false, id: '' })}
        />
      )}
    </main>
  )
}
export default ContainerApp
