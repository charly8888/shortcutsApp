import { FC } from 'react'
import { createPortal } from 'react-dom'
import CrossIcon from '../icons/CrossIcon'
import styles from './PortalShortcut.module.scss'

interface props {
  closePortalSelector: Function
  openPortalShortcut: Function
  openPortalFolder: Function
}

const PortalSelector: FC<props> = ({
  closePortalSelector,
  openPortalShortcut,
  openPortalFolder,
}) => {
  // console.log(modalShortcut)

  return createPortal(
    <main className={styles.containerGlobal}>
      <button
        onClick={() => {
          closePortalSelector()
          openPortalShortcut()
        }}
      >
        Add shortcut
      </button>
      <button
        onClick={() => {
          closePortalSelector()
          openPortalFolder()
        }}
      >
        Add folder
      </button>
      <button onClick={() => closePortalSelector()} className={styles.buttonClose}>
        <CrossIcon className={styles.crossIcon} />
      </button>
    </main>,
    document.getElementById('modal-selector') as HTMLElement
  )
}

export default PortalSelector
