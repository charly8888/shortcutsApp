import { useContext } from 'react'
import { iconsContext } from '../../App'
const setNewsIconsFromDB = async ({ user, jwt,setIcons }) => {
  console.log('set', user, jwt)
  try {
    const reponse = await fetch(`http://localhost:3333/iconsData/${user}`, {
      headers: { Authorization: `"Bearer ${jwt}"` },
    })
    const data = await reponse.json()
    console.log(data.info)
    setIcons(data.info)
  } catch (error) {
    console.log(error)
  }
}

export default setNewsIconsFromDB
