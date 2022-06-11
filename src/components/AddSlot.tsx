import { FC } from 'react'
import styles from './AddButton.module.scss'
import AddIcon from './icons/AddIcon'
interface props {
  openPortal: Function
}
const AddButton: FC<props> = ({ openPortal }) => {
  return (
    <button className={`${styles.addButton}`} onClick={() => openPortal()}>
      <AddIcon className={styles.AddIcon} />
    </button>
  )
}

export default AddButton
