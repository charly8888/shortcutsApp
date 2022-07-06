import { useContext } from 'react'
import { IMAGES } from '../../constants'
import { configContex } from '../../context/configContext'
import styles from './Background.module.scss'
const Background = () => {
  const { backgroundImage } = useContext(configContex)

  return (
    <div className={styles.background}>
      <img src={IMAGES[backgroundImage]} />
      {/* <h5>Beta version, don&#39;t save anything that you can&#39;t permit lose it</h5> */}
    </div>
  )
}

export default Background
