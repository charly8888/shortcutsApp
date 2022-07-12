import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { typesOfSlots } from '../../types'
import AddButton from '../AddSlot'
import ShortcutSlot from '../Slots/ShorcutSlot'
import TextSlot from '../Slots/TextSlot'
import ButtonClose from '../UIComponents/ButtonClose'
import FolderEditPortal from './edit-portals/FolderEditPortal'
import styles from './PortalOpenedFolder.module.scss'
import PortalSelector from './PortalSelector'
import PortalShortcut from './PortalShortcut'
import PortalText from './PortalText'

interface props {
  closePortal: Function
  icons: typesOfSlots[]
  setIcons: Function
  idFolder: string
}

const PortalOpenedFolder: FC<props> = ({ closePortal, icons, setIcons, idFolder }) => {
  const { slots, title }: any = icons.find((e) => e.id === idFolder)

  console.groupCollapsed('Modal opend folder')
  console.log('icons', icons)
  console.log('Id of folder', idFolder)
  console.groupEnd()
  console.log('Slots of folder', slots)

  const [selectorOfItem, setSelectorOfItem] = useState(false)
  const [modalText, setModalText] = useState({
    boolean: false,
    id: '',
    title: '',
    description: '',
  })
  const [modalEdit, setModalEdit] = useState({
    boolean: false,
    type: '',
    id: '',
    isNew: false,
    idFolder: '',
  })
  const [modalShortcut, setModalShortcut] = useState({
    boolean: false,
    id: '',
    link: '',
    title: '',
    iconLink: '',
  })

  return createPortal(
    <main className={styles.containerGlobal}>
      <section className={styles.windowSection}>
        <header className={styles.title}>{title}</header>
        <section className={styles.wrapperItems}>
          {slots?.map((icon: typesOfSlots) => {
            switch (icon.type) {
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
                      setModalEdit({
                        boolean: true,
                        id: icon.id,
                        type: 'text',
                        isNew: false,
                        idFolder,
                      })
                    }}
                    primaryColor={icon.primaryColor}
                    secondaryColor={icon.secondaryColor}
                    idFolder={idFolder}
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
                    setModalShortcut={setModalShortcut}
                    idFolder={idFolder}
                  />
                )
              default:
                throw new Error('No se contempla este typo de slot')
            }
          })}
          <section className={styles.containerButtonAdd}>
            <AddButton openPortal={() => setSelectorOfItem(true)} />
          </section>
        </section>
        <ButtonClose
          widthAndHeightInREM={2}
          borderRadius='0 0 1rem'
          onClick={() => closePortal()}
          className={styles.buttonClose}
        />
      </section>
      {selectorOfItem && (
        <PortalSelector
          closePortalSelector={() => setSelectorOfItem(false)}
          openPortalText={() =>
            setModalEdit({ boolean: true, id: '', type: 'text', isNew: true, idFolder })
          }
          openPortalShortcut={() =>
            setModalShortcut({ boolean: true, id: '', link: '', title: '', iconLink: '' })
          }
          isFolder={true}
        />
      )}
      {modalText.boolean && (
        <PortalText
          closePortal={() => setModalText({ boolean: false, id: '', title: '', description: '' })}
          icons={icons}
          setIcons={setIcons}
          modalText={modalText}
          idFolder={idFolder}
        />
      )}
      {modalShortcut.boolean && (
        <PortalShortcut
          setIcons={setIcons}
          icons={icons}
          closePortal={() =>
            setModalShortcut({ boolean: false, id: '', link: '', title: '', iconLink: '' })
          }
          idFolder={idFolder}
          modalShortcut={modalShortcut}
        />
      )}
      {modalEdit.boolean && (
        <FolderEditPortal
          closePortal={() =>
            setModalEdit({
              boolean: false,
              type: '',
              id: '',
              isNew: false,
              idFolder: '',
            })
          }
          sendIcons={icons}
          setIcons={setIcons}
          modalEdit={modalEdit}
        />
      )}
    </main>,
    document.getElementById('modal-folder-open') as HTMLElement
  )
}

export default PortalOpenedFolder
