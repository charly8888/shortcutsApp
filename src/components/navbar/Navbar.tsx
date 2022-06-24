import { useContext } from 'react'
import { IMAGES } from '../../constants'
import { configContex } from '../../context/configContext'
import AddButton from '../AddSlot'
import ConfigurationIcon from '../icons/ConfigurationIcon'
import styles from './Navbar.module.scss'

const keyPropsOfImages = Object.getOwnPropertyNames(IMAGES)

function handleSetTheme() {
  const headLinkElementCss: HTMLAnchorElement | null = document.querySelector('#theme-link')
  if (headLinkElementCss) {
    if (headLinkElementCss.getAttribute('href') === '/src/styles/themeLight.css') {
      headLinkElementCss.href = '/src/styles/themeDark.css'
      localStorage.setItem('theme', 'dark')
    } else {
      headLinkElementCss.href = '/src/styles/themeLight.css'
      localStorage.setItem('theme', 'light')
    }
  }
}

const Navbar = ({ setModalSelector }) => {
  const { handleToggleNavbar, isNavbarOpen, setImage } = useContext(configContex)
  // console.log(handleToggleNavbar, isNavbarOpen)
  return (
    <nav className={`${styles.navSection} ${isNavbarOpen && styles.openNav}`}>
      <div className={` ${styles.containerAddButton} ${isNavbarOpen && styles.hiddenAddButton}`}>
        <AddButton openPortal={() => setModalSelector(true)} />
      </div>
      <div
        className={`${styles.containerConfiguration} ${!isNavbarOpen && styles.hiddenAddButton}`}
      >
        <h3>Theme</h3>
        <button onClick={handleSetTheme}>changeTheme</button>
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
