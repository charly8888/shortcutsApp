import { FC, SetStateAction, useState } from 'react'
import { createPortal } from 'react-dom'
import { addNewShortcut } from '../../lib/helpers'
import { typesOfSlots } from '../../types'
import CrossIcon from '../icons/CrossIcon'
import styles from './PortalShortcut.module.scss'
interface props {
  closePortal: Function
  setIcons: (value: SetStateAction<typesOfSlots[]>) => void
  icons: typesOfSlots[]
  idFolder?: string
}
const PortalShortcut: FC<props> = ({ closePortal, setIcons, icons, idFolder }) => {
  // console.log(modalShortcut)
  const [information, setInformation] = useState({ link: '', description: '', title: '' })

  return createPortal(
    <main className={styles.containerGlobal}>
      <form
        className={styles.containerSetInfo}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault()
          console.log(e)
          addNewShortcut(setIcons, icons, information, idFolder)
          closePortal()
        }}
      >
        <button onClick={() => closePortal()} className={styles.buttonClose}>
          <CrossIcon className={styles.crossIcon} />
        </button>
        <p>Title</p>
        <input
          name='title'
          value={information.title}
          onChange={(e) => setInformation({ ...information, title: e.target.value })}
        />
        <p>Description </p>
        <input
          name='description'
          value={information.description}
          onChange={(e) => setInformation({ ...information, description: e.target.value })}
        />
        <p>Link</p>
        <input
          name='link'
          value={information.link}
          onChange={(e) => setInformation({ ...information, link: e.target.value })}
        />
        <button className={styles.buttonSave}>Save</button>
      </form>
    </main>,
    document.getElementById('modal-selector') as HTMLElement
  )
}

export default PortalShortcut
