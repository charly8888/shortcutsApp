import { FC } from 'react'
import { createPortal } from 'react-dom'
import FolderIcon from '../icons/FolderIcon'
import LinkIcon from '../icons/LinkIcon'
import TextIcon from '../icons/TextIcon'
import ButtonClose from '../UIComponents/ButtonClose'
import styles from './PortalSelector.module.scss'

interface props {
  closePortalSelector: Function
  openPortalShortcut: Function
  openPortalFolder: Function
  openPortalText: Function
  isFolder: boolean
}

const PortalSelector: FC<props> = ({
  closePortalSelector,
  openPortalShortcut,
  openPortalFolder,
  openPortalText,
  isFolder,
}) => {
  // console.log(modalShortcut)

  return createPortal(
    <main className={styles.containerGlobal}>
      <section className={styles.containerSetInfo}>
        <button
          onClick={() => {
            closePortalSelector()
            openPortalShortcut()
          }}
          className={styles.buttonIcon}
        >
          <LinkIcon />
        </button>
        <button
          onClick={() => {
            closePortalSelector()
            openPortalText()
          }}
          className={styles.buttonIcon}
        >
          <TextIcon colorFront={'#90caf9'} colorBack={'#1976d2'} />
        </button>
        {!isFolder && (
          <button
            onClick={() => {
              closePortalSelector()
              openPortalFolder()
            }}
            className={styles.buttonIcon}
          >
            <FolderIcon colorFront={'#ffca28'} colorBack={'#ffa000'} />
          </button>
        )}
        <ButtonClose onClick={() => closePortalSelector()} />
      </section>
    </main>,
    document.getElementById('modal-selector') as HTMLElement
  )
}

export default PortalSelector
