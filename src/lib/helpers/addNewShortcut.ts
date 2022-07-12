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
    iconLink: string
  },
  idFolder?: string
) {
  const newIcons = [...icons]
  console.log('este es el id que debería apracer', information.id)
  if (idFolder !== undefined) {
    const indexOfFolder = newIcons.findIndex((e) => e.id === idFolder)
    console.log(indexOfFolder)
    if (information.id) {
      const folder: typesOfSlots = newIcons[indexOfFolder]

      const target = folder.slots.find((e: any) => e.id === information.id)

      target.link = information.link
      target.title = information.title
      target.iconLink = information.iconLink

      setIcons(newIcons)
    } else {
      const folder: typesOfSlots = newIcons[indexOfFolder]

      const id = nanoid()
      folder.slots.push({
        id,
        type: 'shortcut',
        link: information.link,
        iconLink: information.iconLink,
        title: information.title,
      })

      setIcons(newIcons)
    }
  } else {
    if (information.id) {
      const indexOftarget = newIcons.findIndex((e) => e.id === information.id)

      newIcons[indexOftarget] = {
        id: newIcons[indexOftarget].id,
        type: 'shortcut',
        link: information.link,
        title: information.title,
        iconLink: information.iconLink,
      } as shortcut

      setIcons(newIcons)
    } else {
      const indexOfFirstEmpty = newIcons.findIndex((e) => e.type === 'empty')

      newIcons[indexOfFirstEmpty] = {
        id: newIcons[indexOfFirstEmpty].id,
        type: 'shortcut',
        link: information.link,
        iconLink: information.iconLink,
        title: information.title,
      } as shortcut

      setIcons(newIcons)
    }
  }
}
