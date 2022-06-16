import React from 'react'
import { typesOfSlots } from '../../types'
import { empty, folder } from '../../types/index'

export const deleteItem = (
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>,
  icons: typesOfSlots[],
  id: string,
  idFolder?: string
) => {
  if (idFolder) {
    const newIcons = [...icons]
    const folder: any = newIcons.find((e) => e.id === idFolder)
    folder.slots = folder.slots.filter((e: folder) => e.id !== id)

    setIcons(newIcons)
  } else {
    const newIcons = icons.map((item) => {
      if (item.id === id) {
        return {
          type: 'empty',
          id,
        } as empty
      }
      return item
    })

    setIcons(newIcons)
  }
}
