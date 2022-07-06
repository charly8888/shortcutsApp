import { useContext, useState } from 'react'
import { iconsContext } from '../../App'
import { IMAGES } from '../../constants'
import { configContex } from '../../context/configContext'
import { usersContext } from '../../context/usersContext'
import AddButton from '../AddSlot'
import ConfigurationIcon from '../icons/ConfigurationIcon'
import ButtonLogout from '../UIComponents/ButtonLogout'
import styles from './Navbar.module.scss'

const keyPropsOfImages = Object.getOwnPropertyNames(IMAGES)

const Navbar = ({ setModalSelector, setModalFormUsers }) => {
  const { handleToggleNavbar, isNavbarOpen, setImage, handleSetTheme, currentTheme } =
    useContext(configContex)

  const { stateUserContext, setStateUserContext } = useContext(usersContext)
  const { setIcons } = useContext(iconsContext)

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

  return isNavbarOpen ? (
    <nav className={`${styles.navSection} ${isNavbarOpen && styles.openNav}`}>
      {stateUserContext.user === null ? (
        <div className={` ${styles.containerLoginAndRegister}`}>
          <button
            onClick={() => setModalFormUsers({ login: true, register: false })}
            className={`${styles.buttonLogAndReg} ${styles.login} `}
          >
            Login
          </button>
          <button
            onClick={() => setModalFormUsers({ login: false, register: true })}
            className={` ${styles.buttonLogAndReg} ${styles.register}`}
          >
            Register
          </button>
        </div>
      ) : (
        <div className={` ${styles.containerLoginAndRegister}`}>
          <h1>{stateUserContext.user}</h1>
          <ButtonLogout
            className={`${styles.ButtomLogout}`}
            onClick={() => handleLogOut(setStateUserContext, setIcons)}
          />
        </div>
      )}

      <div className={`${styles.containerLoginAndRegister} `}>
        <h3>Theme</h3>
        <button onClick={changeTheme}>{theme}</button>
      </div>
      <div className={styles.containerBackgoundSelector}>
        <h3>Background Image</h3>
        <div className={styles.containerSelectorImages}>
          {keyPropsOfImages.map((imagen, i) => {
            return <img src={IMAGES[imagen]} onClick={() => setImage(i + 1)} key={i} />
          })}
        </div>
      </div>

      <ConfigurationIcon className={styles.configIcon} onClick={() => handleToggleNavbar()} />
    </nav>
  ) : (
    <nav className={`${styles.navSection} ${isNavbarOpen && styles.openNav}`}>
      <div className={` ${styles.containerAddButton} ${isNavbarOpen && styles.hiddenAddButton}`}>
        <AddButton openPortal={() => setModalSelector(true)} />
      </div>
      <ConfigurationIcon className={styles.configIcon} onClick={() => handleToggleNavbar()} />
    </nav>
  )
}

function handleLogOut(setStateUserContext, setIcons) {
  setStateUserContext({ user: null })
  localStorage.setItem('infoUser', null)
  const items = JSON.parse(localStorage.getItem('info') || '[]')
  setIcons(items)
}

export default Navbar
