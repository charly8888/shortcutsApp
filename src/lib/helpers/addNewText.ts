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
  const newIcons = [...icons]
  const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')
  const text = {
    id,
    type: 'text',
    text: information.description,
    title: information.title,
    primaryColor: '#90caf9',
    secondaryColor: '#1976d2',
  } as text
  newIcons[indexOfFirstEmpty] = text
  setIcons(newIcons)
}
