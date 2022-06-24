import setTheme from './setTheme'
type actionProp = {
  type: 'toggleNavbarOpen' | 'setImageMulticolor' | 'setTheme'
  payload: number | string
}

function reducer(state: any, action: actionProp) {
  switch (action.type) {
    case 'toggleNavbarOpen':
      return {
        ...state,
        isNavbarOpen: !state.isNavbarOpen,
      }
    case 'setImageMulticolor': {
      localStorage.setItem('image', `${action.payload}`)
      return {
        ...state,
        backgroundImage: action.payload,
      }
    }
    case 'setTheme':
      typeof action.payload === 'string' && setTheme(action.payload)
      localStorage.setItem('theme', `${action.payload}`)
      return {
        ...state,
        currentTheme: action.payload,
      }
    default:
      throw Error('Unknown action.')
  }
}

export default reducer
