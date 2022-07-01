import { useContext, useState } from 'react'
import { IMAGES } from '../../constants'
import { configContex } from '../../context/configContext'
import { usersContext } from '../../context/usersContext'
import AddButton from '../AddSlot'
import ConfigurationIcon from '../icons/ConfigurationIcon'
import styles from './Navbar.module.scss'

const keyPropsOfImages = Object.getOwnPropertyNames(IMAGES)

const Navbar = ({ setModalSelector, setModalFormUsers }) => {
  const { handleToggleNavbar, isNavbarOpen, setImage, handleSetTheme, currentTheme } =
    useContext(configContex)

  const { stateUserContext, setStateUserContext } = useContext(usersContext)

  console.log(stateUserContext, setStateUserContext)
  function changeTheme() {
    if (currentTheme === 'dark') {
      handleSetTheme('light')
      setTheme('dark')
    }
    if (currentTheme === 'light') {
      handleSetTheme('dark')
      setTheme('light')
    }
  }
  const [theme, setTheme] = useState(currentTheme === 'dark' ? 'light' : 'dark')

  return (
    <nav className={`${styles.navSection} ${isNavbarOpen && styles.openNav}`}>
      {stateUserContext.user === null ? (
        <>
          <button
            onClick={() => setModalFormUsers({ login: true, register: false })}
            className={`${!isNavbarOpen && styles.hiddenAddButton}`}
          >
            Login
          </button>
          <button
            onClick={() => setModalFormUsers({ login: false, register: true })}
            className={`${!isNavbarOpen && styles.hiddenAddButton}`}
          >
            Register
          </button>
        </>
      ) : (
        <>
          <h1 className={`${!isNavbarOpen && styles.hiddenAddButton}`}>{stateUserContext.user}</h1>
          <button
            onClick={() => handleLogOut(setStateUserContext)}
            className={`${!isNavbarOpen && styles.hiddenAddButton}`}
          >
            Logout
          </button>
        </>
      )}
      <div className={` ${styles.containerAddButton} ${isNavbarOpen && styles.hiddenAddButton}`}>
        <AddButton openPortal={() => setModalSelector(true)} />
      </div>
      <div
        className={`${styles.containerConfiguration} ${!isNavbarOpen && styles.hiddenAddButton}`}
      >
        <h3>Theme</h3>
        <button onClick={changeTheme}>{theme}</button>

        <h3>Background Image</h3>
        <div className={styles.containerSelectorImages} onScroll={() => console.log('hola')}>
          {keyPropsOfImages.map((imagen, i) => {
            return <img src={IMAGES[imagen]} onClick={() => setImage(i + 1)} key={i} />
          })}
        </div>
      </div>
      <ConfigurationIcon className={styles.configIcon} onClick={() => handleToggleNavbar()} />
    </nav>
  )
}
function handleLogOut(setStateUserContext) {
  setStateUserContext({ user: null })
  localStorage.setItem('infoUser', null)
}
export default Navbar
