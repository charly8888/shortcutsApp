import React, { FC } from 'react'
import { deleteItem } from '../../lib/helpers'
import { typesOfSlots } from '../../types'
import CrossIcon from '../icons/CrossIcon'
import EditIcon from '../icons/EditIcon'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import styles from './ShortcutSlot.module.scss'

interface props {
  id: string
  title: string
  icons: typesOfSlots[]
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>
  link: string
}

const ShortcutSlot: FC<props> = ({ id, title, link, icons, setIcons }) => {
  return (
    <div
      className={` ${stylesGenerals.sizeGrid} ${styles.gridItem}`}
      draggable
      onDragStart={(e) => {
        const target = e.target as HTMLDivElement
        e.dataTransfer.setData('text/plan', target.id)
        console.log(e.dataTransfer)
      }}
      id={id}
    >
      <div className={styles.containerContent}>
        <img src={`${link}/favicon.png`} />
        <a href={link} target='_blank' rel='noreferrer' draggable={false}></a>
      </div>
      <p>{title}</p>
      <button
        className={`${styles.closeButton} ${styles.editButton}`}
        onClick={() => {
          deleteItem(setIcons, icons, id)
          console.log('hola')
        }}
      >
        <EditIcon className={styles.EditIcon} />
      </button>
      <button
        className={styles.closeButton}
        onClick={() => {
          deleteItem(setIcons, icons, id)
          console.log('hola')
        }}
      >
        <CrossIcon className={styles.CrossIcon} />
      </button>
    </div>
  )
}
export default ShortcutSlot
