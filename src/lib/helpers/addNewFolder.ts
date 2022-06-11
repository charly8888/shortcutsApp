import React from 'react'
import { folder, typesOfSlots } from '../../types/index'
export function addNewFolder(
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>,
  icons: typesOfSlots[],
  information: {
    title: string
  }
) {
  const newIcons = [...icons]

  const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

  const folder: folder = {
    id: newIcons[indexOfFirstEmpty].id,
    type: 'folder',
    slots: [],
    title: information.title,
  } as folder

  newIcons[indexOfFirstEmpty] = folder

  setIcons(newIcons)
}
