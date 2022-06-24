import { createContext } from 'react'
import { INITIAL_STATE_CONTEXT_CONFIG } from '../constants'

export const configContex = createContext(INITIAL_STATE_CONTEXT_CONFIG)

export function dispatchesOfConfigContext(dispatch: Function) {

  function handleToggleNavbar() {
    dispatch({ type: 'toggleNavbarOpen' })
  }

  function setImage(number: string) {
    dispatch({ type: 'setImageMulticolor', payload: number })
  }
  
  function handleSetTheme(theme: string) {
    dispatch({ type: 'setTheme', payload: theme })
  }
  return {
    handleToggleNavbar,
    setImage,
    handleSetTheme,
  }
}
