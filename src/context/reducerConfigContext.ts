type actionProp = {
  type: 'toggleNavbarOpen' | 'setImageMulticolor'
  payload: number
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

    default:
      throw Error('Unknown action.')
  }
}

export default reducer
