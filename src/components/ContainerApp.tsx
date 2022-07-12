import { useContext, useEffect, useState } from 'react'
import { iconsContext } from '../App'
import { configContex } from '../context/configContext'
import { fetchSetIcons } from '../lib/apis'
import { setGridFirstTime } from '../lib/helpers'
import styles from './ContainerApp.module.scss'
import Navbar from './navbar/Navbar'
import FolderEditPortal from './portals/edit-portals/FolderEditPortal'
import PortalOpenedFolder from './portals/PortalOpenedFolder'
import PortalSelector from './portals/PortalSelector'
import PortalShortcut from './portals/PortalShortcut'
import PortalText from './portals/PortalText'
import PortalLoginForm from './portals/users-portals/PortalLoginForm'
import PortalRegisterForm from './portals/users-portals/PortalRegisterForm'
import EmptySlot from './Slots/EmptySlot'
import FolderSlot from './Slots/FolderSlot'
import ShortcutSlot from './Slots/ShorcutSlot'
import TextSlot from './Slots/TextSlot'

const ContainerApp = () => {
  const { icons, setIcons } = useContext(iconsContext)
  const [modalSelector, setModalSelector] = useState(false)
  const [modalShortcut, setModalShortcut] = useState({
    boolean: false,
    id: '',
    link: '',
    title: '',
    iconLink: '',
  })

  const [modalText, setModalText] = useState({
    boolean: false,
    id: '',
    title: '',
    description: '',
  })
  const [modalEdit, setModalEdit] = useState({
    boolean: false,
    id: '',
    type: '',
    isNew: false,
  })
  const [isFolderOpened, setIsFolderOpened] = useState({ boolean: false, id: '' })
  const [modalFormUsers, setModalFormUsers] = useState({ login: false, register: false })

  const { handleSetTheme, currentTheme } = useContext(configContex)

  useEffect(() => {
    if (!localStorage.getItem('infoUser')) {
      const items = JSON.parse(localStorage.getItem('info') || '[]')
      if (!items.length) setIcons(setGridFirstTime())
      else setIcons(items)
      console.log(currentTheme)
      handleSetTheme(currentTheme)
    } else {
      const items = JSON.parse(localStorage.getItem('infoDatabase') || '[]')
      handleSetTheme(currentTheme)
      setIcons(items)
    }
  }, [])

  useEffect(() => {
    // console.log(localStorage.getItem('infoUser') === "null")
    if (!localStorage.getItem('infoUser')) {
      if (icons.length) {
        localStorage.setItem('info', JSON.stringify(icons))
      }
    } else {
      // console.log("se ejecuta")
      if (icons.length) {
        localStorage.setItem('infoDatabase', JSON.stringify(icons))
      }
      setIconsInDB()
    }
  }, [icons])

  async function setIconsInDB() {
    console.log('tratando de usar')
    const { jwt, user } = JSON.parse(localStorage.getItem('infoUser')) || ''

    try {
      const response = await fetchSetIcons(user, icons, jwt)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.containerApp}>
      <section className={styles.gridTemplate}>
        {icons?.map((icon) => {
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
                    setModalText({ boolean: true, id: icon.id, title: '', description: '' })
                  }}
                  setModalText={setModalText}
                  openPortalEdit={() => {
                    setModalEdit({ boolean: true, id: icon.id, type: 'text', isNew: false })
                  }}
                  primaryColor={icon.primaryColor}
                  secondaryColor={icon.secondaryColor}
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
                  openPortal={() => {
                    setModalEdit({ boolean: true, id: icon.id, type: 'folder', isNew: false })
                  }}
                  primaryColor={icon.primaryColor}
                  secondaryColor={icon.secondaryColor}
                  setIsFolderOpened={() => setIsFolderOpened({ boolean: true, id: icon.id })}
                />
              )
            case 'shortcut':
              return (
                <ShortcutSlot
                  key={icon.id}
                  id={icon.id}
                  title={icon.title}
                  link={icon.link}
                  iconLink={icon.iconLink}
                  icons={icons}
                  setIcons={setIcons}
                  setModalShortcut={setModalShortcut}
                />
              )
            default:
              throw new Error('No se contempla este typo de slot')
          }
        })}
      </section>
      <Navbar setModalSelector={setModalSelector} setModalFormUsers={setModalFormUsers} />
      {modalSelector && (
        <PortalSelector
          closePortalSelector={() => setModalSelector(false)}
          openPortalShortcut={() =>
            setModalShortcut({ boolean: true, id: '', link: '', title: '', iconLink: '' })
          }
          openPortalFolder={() =>
            setModalEdit({ boolean: true, id: '', type: 'folder', isNew: true })
          }
          openPortalText={() => setModalEdit({ boolean: true, id: '', type: 'text', isNew: true })}
        />
      )}
      {modalShortcut.boolean && (
        <PortalShortcut
          setIcons={setIcons}
          icons={icons}
          closePortal={() =>
            setModalShortcut({ boolean: false, id: '', link: '', title: '', iconLink: '' })
          }
          modalShortcut={modalShortcut}
        />
      )}

      {modalText.boolean && (
        <PortalText
          closePortal={() => setModalText({ boolean: false, id: '', description: '', title: '' })}
          icons={icons}
          setIcons={setIcons}
          modalText={modalText}
        />
      )}
      {modalEdit.boolean && (
        <FolderEditPortal
          closePortal={() => {
            setModalEdit({ boolean: false, id: '', type: '', isNew: false })
          }}
          sendIcons={icons}
          setIcons={setIcons}
          modalEdit={modalEdit}
        />
      )}
      {isFolderOpened.boolean && (
        <PortalOpenedFolder
          closePortal={() => setIsFolderOpened({ boolean: false, id: '' })}
          idFolder={isFolderOpened.id}
          icons={icons}
          setIcons={setIcons}
        />
      )}
      {modalFormUsers.login && <PortalLoginForm setModalFormUsers={setModalFormUsers} />}
      {modalFormUsers.register && <PortalRegisterForm setModalFormUsers={setModalFormUsers} />}
    </main>
  )
}
export default ContainerApp
