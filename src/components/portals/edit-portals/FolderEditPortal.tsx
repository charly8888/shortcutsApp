import { nanoid } from 'nanoid'
import { FC, useState } from 'react'
import { getRandomHexadecimalColor } from '../../../lib/helpers'
import { updateFolderOrShortcutStyle } from '../../../lib/helpers/updateFolderOrShortcutStyle'
import { typesOfSlots } from '../../../types/index'
import FolderIcon from '../../icons/FolderIcon'
import LockClosed from '../../icons/LockClosed'
import LockOpen from '../../icons/LockOpen'
import TextIcon from '../../icons/TextIcon'
import SelectorDefaultColor from '../../Slots/components/SelectorDefaultColor'
import ButtonClose from '../../UIComponents/ButtonClose'
import ButtonSave from '../../UIComponents/ButtonSave'
import styles from './FolderPortal.module.scss'

interface props {
  closePortal: Function
  sendIcons: typesOfSlots[]
  setIcons: Function
  modalEdit: { boolean: boolean; id: string; type: string; isNew: boolean; idFolder?: string }
}
const FolderEditPortal: FC<props> = ({ closePortal, sendIcons, modalEdit, setIcons }) => {
  const icons: typesOfSlots[] = [...sendIcons]

  let itemProps:
    | {
        id: string
        type: string
        primaryColor: string
        secondaryColor: string
        title: string
        slots: []
      }
    | any

  if (modalEdit.isNew) {
    if (modalEdit.idFolder) {
      const id = nanoid()

      itemProps = {
        id,
        type: modalEdit.type,
        primaryColor: '',
        secondaryColor: '',
        title: '',
        slots: [],
      }
    } else {
      const emptyIndex = icons.findIndex((e) => e.type === 'empty')

      itemProps = {
        id: icons[emptyIndex].id,
        type: modalEdit.type,
        primaryColor: '',
        secondaryColor: '',
        title: '',
        slots: [],
      }
    }
  } else {
    if (modalEdit.idFolder) {
      const targetFolder = icons.find((e) => e.id === modalEdit.idFolder)

      itemProps = targetFolder?.slots.find((e: any) => e.id === modalEdit.id)
    } else {
      itemProps = icons.find((e) => e.id === modalEdit.id)
    }
  }

  const [itemNewProps, setItemNewProps] = useState(itemProps)
  const [isBlokedColorSecondary, setIsBlokedColorSecondary] = useState(false)
  const [isBlokedColorPrimary, setIsBlokedColorPrimary] = useState(false)

  console.groupCollapsed('FolderEditPortal')
  console.log('icons', icons)
  console.log('modalEdit', modalEdit)
  console.log('itemProps', itemProps)
  console.log('itemNewProps', itemNewProps)
  console.log('idFolder')
  console.groupEnd()

  const DEFAULT_COLORS = [
    { id: 1, primaryColor: '#43c5df', secondaryColor: '#00aedc' },
    { id: 2, primaryColor: '#ffca28', secondaryColor: '#ffa000' },
    { id: 3, primaryColor: '#7ac044', secondaryColor: '#69ab3c' },
    { id: 4, primaryColor: '#f1772c', secondaryColor: '#da6317' },
    { id: 5, primaryColor: '#ff6459', secondaryColor: '#e03630' },
    { id: 6, primaryColor: '#fc99b5', secondaryColor: '#f17097' },
  ]

  return (
    <section className={styles.containerApp}>
      <main className={styles.containerEditSection}>
        <ButtonClose
          onClick={() => {
            closePortal()
          }}
          widthAndHeightInREM={2.5}
          borderRadius='0 0 1rem'
          className={styles.buttonClose}
        />
        <section className={styles.containerLeft}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              closePortal()
              updateFolderOrShortcutStyle({
                setIcons,
                icons,
                newIcon: itemNewProps,
                idFolder: modalEdit.idFolder,
              })
            }}
          >
            <ButtonSave borderRadius='0 0 0 1rem' widthAndHeightInREM={2.5} />
            <label className={styles.containerTitle}>
              <h2>Title:</h2>
              <input
                value={itemNewProps.title}
                onChange={(e) => setItemNewProps({ ...itemNewProps, title: e.target.value })}
              />
            </label>
            <fieldset>
              <legend>Theme</legend>
              <section className={styles.containerDefaultColorValues}>
                <p>Default</p>
                {DEFAULT_COLORS.map((color) => (
                  <SelectorDefaultColor
                    onChange={() =>
                      setItemNewProps({
                        ...itemNewProps,
                        primaryColor: color.primaryColor,
                        secondaryColor: color.secondaryColor,
                      })
                    }
                    valuesForPrimaryAndSecondaryColor={{
                      primaryColor: color.primaryColor,
                      secondaryColor: color.secondaryColor,
                    }}
                    agree={itemNewProps}
                    key={color.id}
                  />
                ))}
              </section>
              <section className={styles.containerCustomSelect}>
                <p>Custom</p>
                <div className={`${styles.containerCustomSelect} ${styles.containerRandomSection}`}>
                  <input
                    value={itemNewProps.primaryColor}
                    type={'color'}
                    onChange={(e) =>
                      setItemNewProps({ ...itemNewProps, primaryColor: e.target.value })
                    }
                  />
                  <div className={styles.containerLock}>
                    {isBlokedColorPrimary ? <LockClosed /> : <LockOpen />}
                    <input
                      type={'checkbox'}
                      onChange={() => setIsBlokedColorPrimary(!isBlokedColorPrimary)}
                      // className={styles.containerLock}
                    />
                  </div>
                  <button
                    className={styles.randomButton}
                    onClick={(e) => {
                      e.preventDefault()
                      const primaryColor = isBlokedColorPrimary
                        ? itemNewProps.primaryColor
                        : getRandomHexadecimalColor()
                      const secondaryColor = isBlokedColorSecondary
                        ? itemNewProps.secondaryColor
                        : getRandomHexadecimalColor()
                      setItemNewProps({
                        ...itemNewProps,
                        secondaryColor,
                        primaryColor,
                      })
                    }}
                  >
                    Random
                  </button>
                  <div className={styles.containerLock}>
                    {isBlokedColorSecondary ? <LockClosed /> : <LockOpen />}
                    <input
                      type={'checkbox'}
                      onChange={() => setIsBlokedColorSecondary(!isBlokedColorSecondary)}
                    />
                  </div>
                  <input
                    value={itemNewProps.secondaryColor}
                    type={'color'}
                    onChange={(e) =>
                      setItemNewProps({ ...itemNewProps, secondaryColor: e.target.value })
                    }
                  ></input>
                </div>
              </section>
            </fieldset>
          </form>
        </section>

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
