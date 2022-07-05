import { useContext, useState } from 'react'
import { iconsContext } from '../../../App'
import { usersContext } from '../../../context/usersContext'
import { fetchGetUser } from '../../../lib/apis'
import setNewsIconsFromDB from '../../../lib/helpers/setNewsIconsFromDB'
import ButtonClose from '../../UIComponents/ButtonClose'
import styles from './PortalForm.module.scss'

async function handleSubmitLogin(
  e,
  user,
  password,
  setStateUserContext,
  setIcons,
  setModalFormUsers
) {
  e.preventDefault()
  try {
    const result = await fetchGetUser(user, password)

    const data = await result.json()

    // console.log(data, 'data')

    if (result.ok) {
      // console.log('all OK', data)
      localStorage.setItem('infoUser', JSON.stringify({ user: data.user, jwt: data.jwt }))
      setStateUserContext({ user: data.user })
      setNewsIconsFromDB({ user: data.user, jwt: data.jwt, setIcons })
      setModalFormUsers({ login: false, register: false })
    } else {
      console.log(data)
    }
  } catch (e) {
    console.log('error', e)
  }
}
const PortalLoginForm = ({ setModalFormUsers }) => {
  const [valueForm, setValueForm] = useState({ username: '', password: '' })
  const { setStateUserContext } = useContext(usersContext)
  const { setIcons } = useContext(iconsContext)

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          handleSubmitLogin(
            e,
            valueForm.username,
            valueForm.password,
            setStateUserContext,
            setIcons,
            setModalFormUsers
          )
        }}
        className={styles.loginForm}
      >
        <input
          placeholder='Username'
          type={'text'}
          value={valueForm.username}
          onChange={(e) => setValueForm({ ...valueForm, username: e.target.value })}
        />
        <input
          placeholder='Password'
          type={'password'}
          value={valueForm.password}
          onChange={(e) => setValueForm({ ...valueForm, password: e.target.value })}
        />
        <button className={styles.buttonAceppt}>Send</button>
        <ButtonClose
          onClick={() => setModalFormUsers({ login: false, register: false })}
          borderRadius={' .5rem 0'}
        />
      </form>
    </div>
  )
}

export default PortalLoginForm
