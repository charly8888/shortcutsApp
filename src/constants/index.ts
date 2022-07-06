import { INITIAL_STATE_REDUCER, typesOfSlots } from '../types'

export const INITIAL_STATE_OF_GRID_ITEMS: typesOfSlots[] = []

export const INITIAL_STATE_CONTEXT_CONFIG: INITIAL_STATE_REDUCER = {
  backgroundImage: JSON.parse(localStorage.getItem('image') || '1'),
  isNavbarOpen: false,
  currentTheme: localStorage.getItem('theme') || 'dark',
}

type IMAGES_BACKGROUND = {}

export const IMAGES: IMAGES_BACKGROUND = {
  '1': '/images/1.avif',
  '2': '/images/2.avif',
  '3': '/images/3.avif',
  '4': '/images/4.avif',
  // '5': '/images/5.avif',
  // '6': '/images/6.avif',
  // '7': '/images/7.avif',
  // '8': '/images/8.avif',
  // '9': '/images/9.avif',
  // '10': '/images/10.avif',
  // '11': '/images/11.avif',
  // '12': '/images/12.avif',
  // '13': '/images/13.avif',
  // '14': '/images/14.avif',
  // '15': '/images/15.avif',
  // '16': '/images/16.avif',
  // '17': '/images/17.avif',
  // '18': '/images/18.avif',
  // '19': '/images/19.avif',
  // '20': '/images/20.avif',
  // '21': '/images/21.avif',
  // '22': '/images/22.avif',
  // '23': '/images/23.avif',
  // '24': '/images/24.avif',
  // '25': '/images/25.avif',
  // '26': '/images/26.avif',
  // '27': '/images/27.avif',
  // '28': '/images/28.avif',
  // '29': '/images/29.avif',
}
