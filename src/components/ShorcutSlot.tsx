import styles from './ShortcutSlot.module.scss'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'

const ShortcutSlot = ({ id }) => {
  return (
    <div
      className={`${styles.shortcut} ${stylesGenerals.sizeGrid}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plan', e.target.id)
        console.log(e.dataTransfer)
      }}
      id={id}
    >
      
    </div>
  )
}
export default ShortcutSlot
