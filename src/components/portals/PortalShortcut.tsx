import { useState } from 'react'
import { createPortal } from 'react-dom'
import CrossIcon from '../icons/CrossIcon'
import styles from './PortalShortcut.module.scss'

const PortalShortcut = ({ modalShortcut, closePortal, setIcons, icons }) => {
  console.log(modalShortcut)
  const [information, setInformation] = useState({ link: '', description: '', title: '' })

  return createPortal(
    <main className={styles.containerGlobal} onClick={closePortal}>
      <form
        className={styles.containerSetInfo}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault()
          console.log(e)
          addNewFolder(modalShortcut.id, setIcons, icons, information)
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
        <button className={styles.buttonSave} >Save</button>
      </form>
    </main>,
    document.getElementById('modal-container-of-shortcut-info')
  )
}

export default PortalShortcut

function addNewFolder(id: string, setIcons, icons, information) {
  const newIcons = [...icons]
  const indexOfAddButton = newIcons.findIndex((e) => e.id === id)

  const pedazoParaComprobar = newIcons.slice(0, indexOfAddButton)
  console.log(information)
  if (!pedazoParaComprobar.some((e) => e.type === 'empty')) {
    newIcons[indexOfAddButton] = {
      id,
      type: 'shortcut',
      link: information.link,
      description: information.description,
      title: information.title,
    }

    const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

    if (indexOfFirstEmpty >= 0) {
      newIcons[indexOfFirstEmpty] = {
        id: newIcons[indexOfFirstEmpty].id,
        type: 'buttonAdd',
      }
    }
  } else {
    const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

    newIcons[indexOfFirstEmpty] = {
      id: newIcons[indexOfFirstEmpty].id,
      type: 'shortcut',
      link: information.link,
      description: information.description,
      title: information.title,
    }
    console.log(indexOfFirstEmpty)
  }
  console.log(newIcons)
  setIcons(newIcons)
}
