import { nanoid } from 'nanoid'
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
  },
  idFolder: string
) {
  const newIcons = [...icons]

  if (idFolder !== undefined) {
    const id = nanoid()
    const indexOfFolder = newIcons.findIndex((e) => e.id === idFolder)
    console.log(indexOfFolder)
    newIcons[indexOfFolder].slots = [
      ...newIcons[indexOfFolder].slots,
      {
        id,
        type: 'shortcut',
        link: information.link,
        description: information.description,
        title: information.title,
      },
    ]
    setIcons(newIcons)
  } else {
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
}
