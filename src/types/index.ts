export interface empty {
  id: string
  type: 'empty'
}

export interface buttonAdd {
  id: string
  type: 'buttonAdd'
}

export interface shortcut {
  id: string
  type: 'shortcut'
  title: string
  description: string
  link: string
}

export type typesOfSlots = empty | buttonAdd | shortcut
