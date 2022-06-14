import { text, typesOfSlots } from '../../types'

export const openPortalAndUpdateText = (
  setModalText: Function,
  id: string,
  icons: any,
  idFolder?: string
) => {
  if (!idFolder) {
    const textItem = icons.find((e: text) => e.id === id)
    setModalText({ boolean: true, title: textItem.title, description: textItem.text, id })
  } else {
    const { slots } = icons.find((e: typesOfSlots) => e.id === idFolder)
    const textItem = slots.find((e: text) => e.id === id)
    setModalText({ boolean: true, title: textItem.title, description: textItem.text, id })
  }
}
