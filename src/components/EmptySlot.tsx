import { useState } from 'react'
import styles from './EmptySlot.module.scss'
import stylesGenerals from './GeneralStylesForGridItems.module.scss'

const EmptySlot = ({ id, setIcons, icons }) => {
  const [classOver, setClassOver] = useState(false)
  return (
    <div
      className={`${classOver && styles.onDragEnter} ${styles.emptySlot} ${
        stylesGenerals.sizeGrid
      }`}
      onDragOver={(e) => {
        e.preventDefault()
        setClassOver(true)
        // console.log("entra")
      }}
      onDragLeave={() => setClassOver(false)}
      
      id={id}
      onDrop={(e) => {
         setClassOver(false)
        const getDataId = e.dataTransfer.getData('text/plan')
        const getCurrentTargetId = e.target.id

        const newIcons = [...icons]

        const DragElement = newIcons.find((e) => e.id === getDataId)
        const DropElement = newIcons.find((e) => e.id === getCurrentTargetId)

        const DragElementIndex = newIcons.findIndex((e) => e.id === getDataId)
        const DropElementIndex = newIcons.findIndex((e) => e.id === getCurrentTargetId)

        newIcons[DropElementIndex] = DragElement
        newIcons[DragElementIndex] = DropElement

        setIcons(newIcons)
      }}
    ></div>
  )
}

export default EmptySlot
