import React from 'react'
import { typesOfSlots } from '../../types'
import { shortcut } from '../../types/index'

export function addNewShortcut(
  setIcons: React.Dispatch<React.SetStateAction<typesOfSlots[]>>,
  icons: typesOfSlots[],
  information: {
    link: string
    title: string
    description: string
  }
) {
  const newIcons = [...icons]

  const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

  newIcons[indexOfFirstEmpty] = {
    id: newIcons[indexOfFirstEmpty].id,
    type: 'shortcut',
    link: information.link,
    description: information.description,
    title: information.title,
    
  } as shortcut

  setIcons(newIcons)
}
