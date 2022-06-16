import { FC } from 'react'
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
  setIcons: any
  link: string
  setModalShortcut: Function
  idFolder?: string
}

const ShortcutSlot: FC<props> = ({
  id,
  title,
  link,
  icons,
  setIcons,
  setModalShortcut,
  idFolder,
}) => {
  const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\-_\+~#=]{2,256}\.[a-z]{2,6}/g

  function returnDomain(dominio: string) {
    return dominio.match(regex)[0]
  }

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
        <img src={`${returnDomain(link)}/favicon.ico`} />
      </div>
      <a
        href={link}
        className={styles.linkShortcut}
        // target='_blank'
        rel='noreferrer'
        draggable={false}
      ></a>
      <ButtonEdit
        className={`${styles.closeButton} ${styles.editButton}`}
        onClick={() => {
          setModalShortcut({ boolean: true, id, title, link, idFolder })
          console.log('hola')
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
      <p className={styles.title}>{title}</p>
    </div>
  )
}
export default ShortcutSlot
