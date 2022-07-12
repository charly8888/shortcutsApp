export interface empty {
  [key: string]: any
  type: 'empty'
  id: string
  primaryColor: string
  secondaryColor: string
}
export interface shortcut {
  [key: string]: any
  id: string
  type: 'shortcut'
  title: string
  link: string
  iconLink: string
  primaryColor: string
  secondaryColor: string
}
export interface text {
  [key: string]: any
  id: string
  type: 'text'
  title: string
  text: string
  primaryColor: string
  secondaryColor: string
}
export type slotsInFolder = empty | shortcut | text
export interface folder {
  id: string
  type: 'folder'
  title: string
  slots: slotsInFolder[]
  primaryColor: string
  secondaryColor: string
}

export type typesOfSlots = empty | shortcut | folder | text

export interface INITIAL_STATE_REDUCER {
  backgroundImage: string
  isNavbarOpen: boolean
  currentTheme: 'dark' | 'light' | string
  handleToggleNavbar?: Function
  setImage?: Function
  handleSetTheme?: Function
}
