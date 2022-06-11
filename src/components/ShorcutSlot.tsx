import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import styles from './ShortcutSlot.module.scss'

const ShortcutSlot = ({ id, title, description, link }) => {
  return (
    <div
      className={` ${stylesGenerals.sizeGrid}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plan', e.target.id)
        console.log(e.dataTransfer)
      }}
      id={id}
    >
      <div className={styles.containerContent}>
        <img src={`${link}favicon.png`} />
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          draggable={false}
        ></a>
      </div>
      <p>{title}</p>
    </div>
  )
}
export default ShortcutSlot
