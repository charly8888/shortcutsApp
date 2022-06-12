import React, { FC } from 'react'
import { deleteItem, openPortalAndUpdateText } from '../../lib/helpers'
import { typesOfSlots } from '../../types/index'
import CrossIcon from '../icons/CrossIcon'
import EditIcon from '../icons/EditIcon'
import TextIcon from '../icons/TextIcon'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import styles from './TextSlot.module.scss'

interface props {
  id: string
  title: string
  icons: typesOfSlots[]
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>
  openPortal: Function
  setModalText: Function
  openPortalEdit: Function
  primaryColor: string
  secondaryColor: string
}

const TextSlot: FC<props> = ({
  id,
  title,
  icons,
  setIcons,
  setModalText,
  openPortal,
  openPortalEdit,
  secondaryColor,
  primaryColor,
}) => {
  return (
    <div
      className={` ${stylesGenerals.sizeGrid} ${styles.gridItem}`}
      draggable
      onDoubleClick={() => {
        console.log(id, title, icons)
        openPortalAndUpdateText(setModalText, id, icons)
      }}
      onDragStart={(e) => {
        const target = e.target as HTMLDivElement
        e.dataTransfer.setData('text/plan', target.id)
        // console.log(e.dataTransfer)
      }}
      id={id}
    >
      <div className={styles.containerContent}>
        <TextIcon colorBack={secondaryColor} colorFront={primaryColor} />
        {/* <a href={link} target='_blank' rel='noreferrer' draggable={false}></a> */}
      </div>
      <p>{title}</p>
      <button
        className={`${styles.closeButton} ${styles.editButton}`}
        onClick={() => {
          openPortalEdit()
          // console.log('hola')
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
export default TextSlot
