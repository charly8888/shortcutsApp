export const updateFolderOrShortcutStyle = ({ setIcons, icons, newIcon }) => {
  console.log('newIcon', newIcon)
  
  const newArrayOfIcons = [...icons]
  const indexOfTarget = newArrayOfIcons.findIndex((e) => e.id === newIcon.id)
  newArrayOfIcons[indexOfTarget] = newIcon
  
  console.log('update', newArrayOfIcons)

  setIcons(newArrayOfIcons)
}
