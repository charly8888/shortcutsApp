import { useEffect, useState } from 'react'
import { INITIAL_STATE_OF_GRID_ITEMS } from '../constants'
import { setGridFirstTime } from '../lib/helpers'
import AddSlot from './AddSlot'
import styles from './ContainerApp.module.scss'
import ConfigurationIcon from './icons/ConfigurationIcon'
import PortalFolder from './portals/PortalFolder'
import PortalSelector from './portals/PortalSelector'
import PortalShortcut from './portals/PortalShortcut'
import PortalText from './portals/PortalText'
import EmptySlot from './Slots/EmptySlot'
import FolderSlot from './Slots/FolderSlot'
import ShortcutSlot from './Slots/ShorcutSlot'
import TextSlot from './Slots/TextSlot'

const ContainerApp = () => {
  const [icons, setIcons] = useState(INITIAL_STATE_OF_GRID_ITEMS)
  const [modalShortcut, setModalShortcut] = useState(false)
  const [modalSelector, setModalSelector] = useState(false)
  const [modalFolder, setModalFolder] = useState(false)
  const [modalText, setModalText] = useState({
    boolean: false,
    title: '',
    description: '',
    id: '',
  })

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('info') || '[]')
    if (!items.length) setIcons(setGridFirstTime())
    else setIcons(items)
    console.log('hola desde el efect normal ', icons)
  }, [])
  // console.log(icons)
  useEffect(() => {
    if (icons.length) {
      localStorage.setItem('info', JSON.stringify(icons))
    }
    console.log('hola desde el effect de icons', icons)
  }, [icons])

  return (
    <main className={styles.containerApp}>
      <section className={styles.gridTemplate}>
        {icons.map((icon) => {
          switch (icon.type) {
            case 'empty':
              return <EmptySlot key={icon.id} id={icon.id} setIcons={setIcons} icons={icons} />
            case 'text':
              return (
                <TextSlot
                  key={icon.id}
                  id={icon.id}
                  title={icon.title}
                  icons={icons}
                  setIcons={setIcons}
                  openPortal={() => {
                    setModalText({ boolean: true, title: '', description: '', id: '' })
                  }}
                  setModalText={setModalText}
                />
              )
            case 'folder':
              return (
                <FolderSlot
                  key={icon.id}
                  id={icon.id}
                  title={icon.title}
                  icons={icons}
                  setIcons={setIcons}
                />
              )
            case 'shortcut':
              return (
                <ShortcutSlot
                  key={icon.id}
                  id={icon.id}
                  title={icon.title}
                  link={icon.link}
                  icons={icons}
                  setIcons={setIcons}
                />
              )
            default:
              throw new Error('No se contempla este typo de slot')
          }
        })}
      </section>
      <nav className={styles.navSection}>
        {/* <DeleteIcon className={styles.deleteIcon} /> */}
        <AddSlot openPortal={() => setModalSelector(true)} />
        <ConfigurationIcon className={styles.configIcon} />
      </nav>
      {modalSelector && (
        <PortalSelector
          closePortalSelector={() => setModalSelector(false)}
          openPortalShortcut={() => setModalShortcut(true)}
          openPortalFolder={() => setModalFolder(true)}
          openPortalText={() => setModalText({ boolean: true, title: '', description: '', id: '' })}
        />
      )}
      {modalShortcut && (
        <PortalShortcut
          setIcons={setIcons}
          icons={icons}
          closePortal={() => setModalShortcut(false)}
        />
      )}
      {modalFolder && (
        <PortalFolder closePortal={() => setModalFolder(false)} icons={icons} setIcons={setIcons} />
      )}
      {modalText.boolean && (
        <PortalText
          closePortal={() => setModalText({ boolean: false, title: '', description: '', id: '' })}
          icons={icons}
          setIcons={setIcons}
          modalText={modalText}
        />
      )}
    </main>
  )
}
export default ContainerApp
