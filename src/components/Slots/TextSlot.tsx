import { FC } from 'react'
import { deleteItem, openPortalAndUpdateText } from '../../lib/helpers'
import { typesOfSlots } from '../../types/index'
import TextIcon from '../icons/TextIcon'
import ButtonClose from '../UIComponents/ButtonClose'
import ButtonEdit from '../UIComponents/ButtonEdit'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import styles from './TextSlot.module.scss'

interface props {
  id: string
  title: string
  icons: typesOfSlots[]
  setIcons: any
  openPortal: Function
  setModalText: Function
  openPortalEdit: Function
  primaryColor: string
  secondaryColor: string
  idFolder?: string
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
  idFolder,
}) => {
  return (
    <div
      className={` ${stylesGenerals.sizeGrid} ${styles.gridItem}`}
      draggable
      onDoubleClick={() => {
        console.log('console del doble click', id, title, icons)
        openPortalAndUpdateText(setModalText, id, icons, idFolder)
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
      <ButtonEdit
        className={`${styles.closeButton} ${styles.editButton}`}
        onClick={() => {
          openPortalEdit()
          // console.log('hola')
        }}
        widthAndHeightInREM={1.2}
        margin={'0 1.2rem'}
      />

      <ButtonClose
        onClick={() => {
          deleteItem(setIcons, icons, id, idFolder)
          console.log('hola')
        }}
        widthAndHeightInREM={1.2}
        margin={'0'}
        className={styles.closeButton}
      />

      {/* <button
        className={styles.closeButton}
        onClick={() => {
          deleteItem(setIcons, icons, id)
          console.log('hola')
        }}
      >
        <CrossIcon className={styles.CrossIcon} />
      </button> */}
    </div>
  )
}
export default TextSlot
