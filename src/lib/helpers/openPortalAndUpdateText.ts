export const openPortalAndUpdateText = (setModalText, id, icons) => {
  const textItem = icons.find((e) => e.id === id)
  setModalText({ boolean: true, title: textItem.title, description: textItem.text, id })
}
