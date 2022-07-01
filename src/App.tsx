import { createContext, useReducer, useState } from 'react'
import Background from './components/background/Background'
import ContainerApp from './components/ContainerApp'
import { INITIAL_STATE_CONTEXT_CONFIG, INITIAL_STATE_OF_GRID_ITEMS } from './constants'
import { configContex, dispatchesOfConfigContext } from './context/configContext'
import reducer from './context/reducerConfigContext'
import { usersContext } from './context/usersContext'

export const iconsContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE_CONTEXT_CONFIG)
  const { handleToggleNavbar, setImage, handleSetTheme } = dispatchesOfConfigContext(dispatch)

  const dataOfUser = JSON.parse(localStorage.getItem('infoUser')) || { user: null }
  // console.log('dataOfUser,', dataOfUser)
  const [stateUserContext, setStateUserContext] = useState(dataOfUser)
  const [icons, setIcons] = useState(INITIAL_STATE_OF_GRID_ITEMS)

  return (
    <>
      <usersContext.Provider value={{ stateUserContext, setStateUserContext }}>
        <configContex.Provider value={{ ...state, handleToggleNavbar, setImage, handleSetTheme }}>
          <iconsContext.Provider value={{ icons, setIcons }}>
            <Background />
            <ContainerApp />
          </iconsContext.Provider>
        </configContex.Provider>
      </usersContext.Provider>
    </>
  )
}

export default App
