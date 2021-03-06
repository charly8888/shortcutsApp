import React, { FC } from 'react'
import { deleteItem } from '../../lib/helpers'
import { typesOfSlots } from '../../types/index'
import FolderIcon from '../icons/FolderIcon'
import ButtonClose from '../UIComponents/ButtonClose'
import ButtonEdit from '../UIComponents/ButtonEdit'
import styles from './FolderSlot.module.scss'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'

interface props {
  id: string
  title: string
  icons: typesOfSlots[]
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>
  openPortal: Function
  primaryColor: string
  secondaryColor: string
  setIsFolderOpened: Function
}

const FolderSlot: FC<props> = ({
  id,
  title,
  icons,
  setIcons,
  openPortal,
  secondaryColor,
  primaryColor,
  setIsFolderOpened,
}) => {
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
      onDoubleClick={() => setIsFolderOpened()}
    >
      <div className={styles.containerContent}>
        <FolderIcon colorBack={secondaryColor} colorFront={primaryColor} />
        {/* <a href={link} target='_blank' rel='noreferrer' draggable={false}></a> */}
      </div>
      <p>{title}</p>
      <ButtonEdit
        className={`${styles.closeButton} ${styles.editButton}`}
        onClick={() => {
          openPortal()
        }}
        widthAndHeightInREM={1.2}
        margin={'0 1.2rem'}
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
export default FolderSlot
