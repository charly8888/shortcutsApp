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
}

export type typesOfSlots = empty | buttonAdd | shortcut
