export const openPortalAndUpdateText = (setModalText, id, icons, idFolder) => {
  if (!idFolder) {
    const textItem = icons.find((e) => e.id === id)
    setModalText({ boolean: true, title: textItem.title, description: textItem.text, id })
  } else {
    const { slots } = icons.find((e) => e.id === idFolder)
    const textItem = slots.find((e) => e.id === id)
    setModalText({ boolean: true, title: textItem.title, description: textItem.text, id })
  }
}
