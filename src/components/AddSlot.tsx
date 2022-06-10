import styles from './AddButton.module.scss'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'
import AddIcon from './icons/AddIcon'

const AddButton = ({ id, setIcons, icons }) => {
  return (
    <div className={`${stylesGenerals.sizeGrid}`}>
      <button
        className={`${styles.addButton}`}
        onClick={() => addNewFolder(id, setIcons, icons)}
        id={id}
      >
        <AddIcon className={styles.AddIcon} />
      </button>
    </div>
  )
}

function addNewFolder(id: string, setIcons, icons) {
  const newIcons = [...icons]
  const indexOfAddButton = newIcons.findIndex((e) => e.id === id)

  const pedazoParaComprobar = newIcons.slice(0, indexOfAddButton)

  if (!pedazoParaComprobar.some((e) => e.type === 'empty')) {
    newIcons[indexOfAddButton] = { id, type: 'shortcut' }

    const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

    if (indexOfFirstEmpty >= 0) {
      newIcons[indexOfFirstEmpty] = {
        id: newIcons[indexOfFirstEmpty].id,
        type: 'buttonAdd',
      }
    }
  } else {
    const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

    newIcons[indexOfFirstEmpty] = {
      id: newIcons[indexOfFirstEmpty].id,
      type: 'shortcut',
    }
    console.log(indexOfFirstEmpty)
  }
  console.log(newIcons)
  setIcons(newIcons)
}

export default AddButton
