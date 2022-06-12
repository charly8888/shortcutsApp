export interface empty {
  type: 'empty'
  id: string
}
export interface shortcut {
  id: string
  type: 'shortcut'
  title: string
  link: string
}
export interface text {
  id: string
  type: 'text'
  title: string
  text: string
  primaryColor?: string
  secondaryColor?: string
}
export type slotsInFolder = empty | shortcut | text
export interface folder {
  id: string
  type: 'folder'
  title: string
  slots: slotsInFolder[]
  primaryColor?: string
  secondaryColor?: string
}

export type typesOfSlots = empty | shortcut | folder | text
