import React, { FC } from 'react'
import { deleteItem } from '../lib/helpers'
import { typesOfSlots } from '../types/index'
import styles from './FolderSlot.module.scss'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import CrossIcon from './icons/CrossIcon'
import FolderIcon from './icons/FolderIcon'

interface props {
  id: string
  title: string
  icons: typesOfSlots[]
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>
}

const FolderSlot: FC<props> = ({ id, title, icons, setIcons }) => {
  return (
    <div
      className={` ${stylesGenerals.sizeGrid} ${styles.gridItem}`}
      draggable
      onDragStart={(e) => {
        const target = e.target as HTMLDivElement
        e.dataTransfer.setData('text/plan', target.id)
        // console.log(e.dataTransfer)
      }}
      id={id}
    >
      <div className={styles.containerContent}>
        <FolderIcon />
        {/* <a href={link} target='_blank' rel='noreferrer' draggable={false}></a> */}
      </div>
      <p>{title}</p>

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
export default FolderSlot
