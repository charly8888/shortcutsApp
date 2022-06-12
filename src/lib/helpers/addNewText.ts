import React from 'react'
import { text, typesOfSlots } from '../../types/index'
export function addNewText(
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>,
  icons: typesOfSlots[],
  information: {
    title: string
    description: string
  },
  id: string
) {
  if (id === '') {
    const newIcons = [...icons]
    const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')
    const text = {
      id: newIcons[indexOfFirstEmpty].id,
      type: 'text',
      text: information.description,
      title: information.title,
    } as text
    newIcons[indexOfFirstEmpty] = text
    setIcons(newIcons)
  } else {
    const newIcons = [...icons]
    const indexOfTextToEdit = newIcons.findIndex((e) => e.id === id)
    const text = {
      id,
      type: 'text',
      text: information.description,
      title: information.title,
      primaryColor: '#90caf9',
      secondaryColor: '#1976d2',
    } as text
    newIcons[indexOfTextToEdit] = text
    setIcons(newIcons)
  }
}
