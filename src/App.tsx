import { useReducer } from 'react'
import Background from './components/background/Background'
import ContainerApp from './components/ContainerApp'
import { INITIAL_STATE_CONTEXT_CONFIG } from './constants'
import { configContex, dispatchesOfConfigContext } from './context/configContext'
import reducer from './context/reducerConfigContext'

function App() {
  
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE_CONTEXT_CONFIG)
  const { handleToggleNavbar, setImage, handleSetTheme } = dispatchesOfConfigContext(dispatch)

  return (
    <>
      <configContex.Provider value={{ ...state, handleToggleNavbar, setImage, handleSetTheme }}>
        <Background />
        <ContainerApp />
      </configContex.Provider>
    </>
  )
}

export default App
