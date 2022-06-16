import { slotsInFolder } from "../../types"

export const updateFolderOrShortcutStyle = ({
  setIcons,
  icons,
  newIcon,
  idFolder,
}: {
  setIcons: Function
  icons: any
  newIcon: any
  idFolder?: string
}) => {
  const newArrayOfIcons = [...icons]

  console.log('idFolder desde update', idFolder)
  if (idFolder) {
    const folderTarget = newArrayOfIcons.find((e) => e.id === idFolder)

    const isMatch = folderTarget.slots.findIndex((e: slotsInFolder) => e.id === newIcon.id)
    console.log('isMatch', isMatch)
    console.log('newIcon', newIcon)

    if (isMatch >= 0) {
      folderTarget.slots[isMatch] = newIcon

      console.log('isMatchreasignado', isMatch)
      console.log('folder', folderTarget)
      setIcons(newArrayOfIcons)
    } else {
      folderTarget.slots.push(newIcon)
      setIcons(newArrayOfIcons)
    }
  } else {
    console.log('newIcon', newIcon)

    const indexOfTarget = newArrayOfIcons.findIndex((e) => e.id === newIcon.id)
    newArrayOfIcons[indexOfTarget] = newIcon

    console.log('update', newArrayOfIcons)

    setIcons(newArrayOfIcons)
  }
}
