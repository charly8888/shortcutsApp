import React, { FC } from 'react'
import { deleteItem } from '../../lib/helpers'
import { typesOfSlots } from '../../types'
import ButtonClose from '../UIComponents/ButtonClose'
import ButtonEdit from '../UIComponents/ButtonEdit'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import styles from './ShortcutSlot.module.scss'

interface props {
  id: string
  title: string
  icons: typesOfSlots[]
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>
  link: string
  setModalShortcut: Function
}

const ShortcutSlot: FC<props> = ({ id, title, link, icons, setIcons, setModalShortcut }) => {
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
        <img src={`${link}/favicon.ico`} />
        <a href={link} target='_blank' rel='noreferrer' draggable={false}></a>
      </div>
      <p>{title}</p>
      <ButtonEdit
        className={`${styles.closeButton} ${styles.editButton}`}
        onClick={() => {
          setModalShortcut({ boolean: true, id, title, link })
          console.log('hola')
        }}
        widthAndHeightInREM={1.2}
        margin={'1.2rem 0'}
      />

      <ButtonClose
        onClick={() => {
          deleteItem(setIcons, icons, id)
          console.log('hola')
        }}
        widthAndHeightInREM={1.2}
        margin={'0'}
        className={styles.closeButton}
      />
    </div>
  )
}
export default ShortcutSlot
