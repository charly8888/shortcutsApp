import { FC, SetStateAction, useState } from 'react'
import { createPortal } from 'react-dom'
import { addNewText } from '../../lib/helpers/addNewText'
import { typesOfSlots } from '../../types/index'
import ButtonClose from '../UIComponents/ButtonClose'
import ButtonSave from '../UIComponents/ButtonSave'
import styles from './PortalText.module.scss'

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

  console.log('information', information)
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
        <header className={styles.title}>{information.title}</header>
        <textarea
          name='description'
          value={information.description}
          onChange={(e) => setInformation({ ...information, description: e.target.value })}
        />
        <ButtonClose onClick={closePortal} widthAndHeightInREM={2} />
        <ButtonSave widthAndHeightInREM={2} />
      </form>
    </main>,
    document.getElementById('modal-selector') as HTMLElement
  )
}

export default PortalText
