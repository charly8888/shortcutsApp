import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { slotsInFolder, typesOfSlots } from '../../types'
import AddButton from '../AddSlot'
import CrossIcon from '../icons/CrossIcon'
import ShortcutSlot from '../Slots/ShorcutSlot'
import TextSlot from '../Slots/TextSlot'
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

  
  console.log(idFolder)
  console.log(icons)

  const { slots }: { slots: slotsInFolder[] } = icons.find((e) => e.id === idFolder)

  const [selectorOfItem, setSelectorOfItem] = useState(false)
  const [modalText, setModalText] = useState({
    boolean: false,
    id: '',
  })
  const [modalEdit, setModalEdit] = useState({
    boolean: false,
    id: '',
  })
  const [modalShortcut, setModalShortcut] = useState(false)
  // console.groupCollapsed('Modal opene folder')
  // console.log('Slots of folder', slots)
  // console.log('Id of folder', idFolder)
  // console.log('')
  // console.groupEnd()

  return createPortal(
    <main className={styles.containerGlobal}>
      <section className={styles.windowSection}>
        <h4 className={styles.title}>asdasd</h4>
        <section className={styles.wrapperItems}>
          {slots?.map((icon) => {
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
                      setModalText({ boolean: true, id: icon.id })
                    }}
                    setModalText={setModalText}
                    openPortalEdit={() => {
                      setModalEdit({ boolean: true, id: icon.id })
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
        <button onClick={() => closePortal()} className={styles.buttonClose}>
          <CrossIcon className={styles.crossIcon} />
        </button>
      </section>
      {selectorOfItem && (
        <PortalSelector
          closePortalSelector={() => setSelectorOfItem(false)}
          openPortalShortcut={() => setModalShortcut(true)}
          openPortalText={() => setModalText({ boolean: true, id: '' })}
          isFolder={true}
        />
      )}
      {modalText.boolean && (
        <PortalText
          closePortal={() => setModalText({ boolean: false, id: '' })}
          icons={icons}
          setIcons={setIcons}
          modalText={modalText}
          idFolder={idFolder}
        />
      )}
      {modalShortcut && (
        <PortalShortcut
          setIcons={setIcons}
          icons={icons}
          closePortal={() => setModalShortcut(false)}
          idFolder={idFolder}
        />
      )}
      {modalEdit.boolean && (
        <FolderEditPortal
          closePortal={() => setModalEdit({ boolean: false, id: '' })}
          icons={icons}
          setIcons={setIcons}
          modalEdit={modalEdit}
        />
      )}
    </main>,
    document.getElementById('modal-folder-open') as HTMLElement
  )
}

export default PortalOpenedFolder
