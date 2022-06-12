import { FC, SetStateAction, useState } from 'react'
import { createPortal } from 'react-dom'
import { addNewText } from '../../lib/helpers/addNewText'
import { typesOfSlots } from '../../types/index'
import CrossIcon from '../icons/CrossIcon'
import styles from './PortalShortcut.module.scss'

interface props {
  closePortal: () => void
  setIcons: (value: SetStateAction<typesOfSlots[]>) => void
  icons: typesOfSlots[]
}

const PortalText: FC<props> = ({ closePortal, setIcons, icons }) => {
  // console.log(modalShortcut)
  const [information, setInformation] = useState({ description: '', title: '' })
  const modalContainer = document.getElementById('modal-text') as HTMLElement
  return createPortal(
    <main className={styles.containerGlobal}>
      <form
        className={styles.containerSetInfo}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault()
          console.log(e)
          addNewText(setIcons, icons, information)
          closePortal()
        }}
      >
        <button onClick={closePortal} className={styles.buttonClose}>
          <CrossIcon className={styles.crossIcon} />
        </button>
        <p>Title</p>
        <input
          name='title'
          value={information.title}
          onChange={(e) => setInformation({ ...information, title: e.target.value })}
        />
        <p>Description </p>
        <textarea
          name='description'
          value={information.description}
          onChange={(e) => setInformation({ ...information, description: e.target.value })}
        />

        <button className={styles.buttonSave}>Save</button>
      </form>
    </main>,
    modalContainer
  )
}

export default PortalText
