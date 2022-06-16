import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { addNewShortcut } from '../../lib/helpers'
import { typesOfSlots } from '../../types'
import ButtonClose from '../UIComponents/ButtonClose'
import ButtonSave from '../UIComponents/ButtonSave'
import styles from './PortalShortcut.module.scss'
interface props {
  closePortal: Function
  setIcons: any
  icons: typesOfSlots[]
  idFolder?: string
  modalShortcut: { boolean: boolean; link: string; title: string; id: string }
}
const PortalShortcut: FC<props> = ({ closePortal, setIcons, icons, idFolder, modalShortcut }) => {
  console.log(modalShortcut)
  const { link, title, id } = modalShortcut
  const [information, setInformation] = useState({ link, title, id })

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
        <ButtonClose onClick={() => closePortal()} borderRadius='0 0 .5rem 0' />
        <ButtonSave borderRadius='0 0  0 .5rem ' />
        <p>Title</p>
        <input
          name='title'
          value={information.title}
          onChange={(e) => setInformation({ ...information, title: e.target.value })}
        />
        <p>Link</p>
        <input
          name='link'
          value={information.link}
          onChange={(e) => setInformation({ ...information, link: e.target.value })}
          placeholder='https://google.com'
        />
      </form>
    </main>,
    document.getElementById('modal-selector') as HTMLElement
  )
}

export default PortalShortcut
