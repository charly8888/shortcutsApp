import styles from './AddButton.module.scss'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import AddIcon from './icons/AddIcon'

const AddButton = ({ openPortal }) => {
  return (
    <div className={`${stylesGenerals.sizeGrid}`}>
      <button className={`${styles.addButton}`} onClick={openPortal}>
        <AddIcon className={styles.AddIcon} />
      </button>
    </div>
  )
}

export default AddButton
