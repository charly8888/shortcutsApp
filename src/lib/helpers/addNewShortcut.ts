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
    id: string
  },
  idFolder?: string
) {
  const newIcons = [...icons]

  if (idFolder !== undefined) {
    const id = nanoid()

    const indexOfFolder = newIcons.findIndex((e) => e.id === idFolder)

    console.log(indexOfFolder)

    const folder: typesOfSlots = newIcons[indexOfFolder]

    folder.slots.push({
      id,
      type: 'shortcut',
      link: information.link,
      title: information.title,
    })

    setIcons(newIcons)
  } else {
    if (information.id) {
      const indexOftarget = newIcons.findIndex((e) => e.id === information.id)

      newIcons[indexOftarget] = {
        id: newIcons[indexOftarget].id,
        type: 'shortcut',
        link: information.link,
        title: information.title,
      } as shortcut

      setIcons(newIcons)
    } else {
      const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

      newIcons[indexOfFirstEmpty] = {
        id: newIcons[indexOfFirstEmpty].id,
        type: 'shortcut',
        link: information.link,
        title: information.title,
      } as shortcut

      setIcons(newIcons)
    }
  }
}
