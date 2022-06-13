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
  modalText: {
    boolean: boolean
    title: string
    description: string
    id: string
  }
  idFolder?: string
}

const PortalText: FC<props> = ({ closePortal, setIcons, icons, modalText, idFolder }) => {
  // console.log(modalShortcut)

  const { description, title, id } = modalText
  console.log('hola desde el portal', modalText)

  const [information, setInformation] = useState({ description, title })
  
console.log("information", information)
  const modalContainer = document.getElementById('modal-selector') as HTMLElement
  return createPortal(
    <main className={styles.containerGlobal}>
      <form
        className={styles.containerSetInfo}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault()
          console.log(id)
          addNewText(setIcons, icons, information, id, idFolder)
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
