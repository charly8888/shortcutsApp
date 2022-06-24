import { useContext, useState } from 'react'
import { IMAGES } from '../../constants'
import { configContex } from '../../context/configContext'
import AddButton from '../AddSlot'
import ConfigurationIcon from '../icons/ConfigurationIcon'
import styles from './Navbar.module.scss'

const keyPropsOfImages = Object.getOwnPropertyNames(IMAGES)

const Navbar = ({ setModalSelector }) => {
  const { handleToggleNavbar, isNavbarOpen, setImage, handleSetTheme, currentTheme } =
    useContext(configContex)
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

export default Navbar
