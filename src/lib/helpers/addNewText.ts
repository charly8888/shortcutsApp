import { nanoid } from 'nanoid'
import React from 'react'
import { text, typesOfSlots } from '../../types/index'
export function addNewText(
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>,
  icons: typesOfSlots[],
  information: {
    title: string
    description: string
  },
  id: string,
  idFolder?: string
) {
  const newIcons = [...icons]
  console.groupCollapsed('Edit text or create new')
  console.log('Id text:', id)
  console.log('Id folder:', idFolder)
  console.groupEnd()
  if (!id) {
    if (idFolder !== undefined) {
      const id = nanoid()
      const indexOfFolder = newIcons.findIndex((e) => e.id === idFolder)
      newIcons[indexOfFolder].slots = [
        ...newIcons[indexOfFolder].slots,
        {
          id,
          type: 'text',
          text: information.description,
          title: information.title,
          primaryColor: '#90caf9',
          secondaryColor: '#1976d2',
        } as text,
      ]
      setIcons(newIcons)
    } else {
      const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

      const text = {
        id: newIcons[indexOfFirstEmpty].id,
        type: 'text',
        text: information.description,
        title: information.title,
        primaryColor: '#90caf9',
        secondaryColor: '#1976d2',
      } as text
      newIcons[indexOfFirstEmpty] = text
      setIcons(newIcons)
    }
  } else {
    if (idFolder === undefined) {
      const indexOfTextItem = newIcons.findIndex((e) => e.id === id)
      newIcons[indexOfTextItem] = {
        ...newIcons[indexOfTextItem],
        text: information.description,
        title: information.title,
      }
      setIcons(newIcons)
    } else {
      console.log('hola desde la parte en que no es undefined el idFolder')
      const indexOfFolder = newIcons.findIndex((e) => e.id === idFolder)
      const { slots } = newIcons[indexOfFolder]

      const selectedText = slots.find((e) => e.id === id)

      selectedText.text = information.description
      selectedText.title = information.title

      console.log('texto seleccionado', selectedText)

      setIcons(newIcons)
    }
  }
}
