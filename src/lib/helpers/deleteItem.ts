import React from 'react'
import { typesOfSlots } from '../../types'
import { empty } from '../../types/index'

export const deleteItem = (
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>,
  icons: typesOfSlots[],
  id: string
) => {
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
