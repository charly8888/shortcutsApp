import { FC, useState } from 'react'
import { updateFolderOrShortcutStyle } from '../../../lib/helpers/updateFolderOrShortcutStyle'
import { typesOfSlots } from '../../../types/index'
import CrossIcon from '../../icons/CrossIcon'
import FolderIcon from '../../icons/FolderIcon'
import TextIcon from '../../icons/TextIcon'
import styles from './FolderPortal.module.scss'
interface props {
  closePortal: Function
  icons: typesOfSlots[]
  setIcons: Function
  modalEdit: { boolean: boolean; id: string }
}
const FolderEditPortal: FC<props> = ({ closePortal, icons, modalEdit, setIcons }) => {
  const itemProps = icons.find((e) => e.id === modalEdit.id)

  const [itemNewProps, setItemNewProps] = useState(itemProps)
  console.groupCollapsed('FolderEditPortal')
  console.log('icons', icons)
  console.log('modalEdit', modalEdit)
  console.log('itemProps', itemProps)
  console.log('itemNewProps', itemNewProps)
  console.groupEnd()
  return (
    <section className={styles.containerApp}>
      <main className={styles.containerEditSection}>
        <button onClick={() => closePortal()} className={styles.buttonClose}>
          <CrossIcon className={styles.crossIcon} />
        </button>
        <form
          onSubmit={() => {
            closePortal()
            updateFolderOrShortcutStyle({ setIcons, icons, newIcon: itemNewProps })
          }}
        >
          <input
            value={itemNewProps.title}
            onChange={(e) => setItemNewProps({ ...itemNewProps, title: e.target.value })}
          />
          <input
            value={itemNewProps.primaryColor}
            type={'color'}
            onChange={(e) => setItemNewProps({ ...itemNewProps, primaryColor: e.target.value })}
          />
          <input
            value={itemNewProps.secondaryColor}
            type={'color'}
            onChange={(e) => setItemNewProps({ ...itemNewProps, secondaryColor: e.target.value })}
          />
          <button className={styles.buttonSave}>Save</button>
        </form>
        {itemNewProps?.type === 'text' ? (
          <TextIcon
            className={styles.icon}
            colorBack={itemNewProps.secondaryColor}
            colorFront={itemNewProps.primaryColor}
          />
        ) : (
          <FolderIcon
            className={styles.icon}
            colorBack={itemNewProps.secondaryColor}
            colorFront={itemNewProps.primaryColor}
          />
        )}
      </main>
    </section>
  )
}

export default FolderEditPortal
