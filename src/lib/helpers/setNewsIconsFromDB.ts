import { fetchIcons } from '../apis/fetchIcons'
import { setGridFirstTime } from './setGridFirstTime'

const setNewsIconsFromDB = async ({ user, jwt, setIcons }) => {
  // console.log('set', user, jwt)
  try {
    const reponse = await fetchIcons(user, jwt)
    const data = await reponse.json()
    // console.log(data.statusCode === 500 )

    if (data.statusCode === 500) {
      const firstTime = setGridFirstTime()
      console.log(firstTime)

      setIcons(firstTime)
    } else {
      setIcons(data.info)
    }
  } catch (error) {
    console.log('error trying find iconsDB', error)
  }
}

export default setNewsIconsFromDB
