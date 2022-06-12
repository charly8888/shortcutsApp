export const updateFolderOrShortcutStyle = ({ setIcons, icons, newIcon }) => {
  const newArrayOfIcons = [...icons]
  const indexOfTarget = newArrayOfIcons.findIndex((e) => e.id === newIcon.id)
  newArrayOfIcons[indexOfTarget] = newIcon
  console.log('update', newArrayOfIcons)
  console.log('newIcon', newIcon)
  setIcons(newArrayOfIcons)
}
