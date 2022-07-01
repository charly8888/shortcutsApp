import { useContext, useState } from 'react'
import { iconsContext } from '../../../App'
import { usersContext } from '../../../context/usersContext'
import setNewsIconsFromDB from '../../../lib/helpers/setNewsIconsFromDB'
import ButtonClose from '../../UIComponents/ButtonClose'
import styles from './PortalForm.module.scss'

async function handleSubmitLogin(e, user, password, setStateUserContext, setIcons) {
  e.preventDefault()
  try {
    const result = await fetch(`http://localhost:3333/getUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    })

    const data = await result.json()

    if (result.ok) {
      console.log('all OK', data)

      localStorage.setItem('infoUser', JSON.stringify({ user: data.user, jwt: data.jwt }))
      setStateUserContext({ user: data.user })
      setNewsIconsFromDB({ user: data.user, jwt: data.jwt, setIcons })
    } else {
      console.log(data)
    }
  } catch (e) {
    console.log('error', e)
  }
}
const PortalLoginForm = ({ setModalFormUsers }) => {
  const [valueForm, setValueForm] = useState({ username: '', password: '' })
  const { stateUserContext, setStateUserContext } = useContext(usersContext)
  const { setIcons } = useContext(iconsContext)

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) =>
          handleSubmitLogin(
            e,
            valueForm.username,
            valueForm.password,
            setStateUserContext,
            setIcons
          )
        }
        className={styles.loginForm}
      >
        <label>
          <p>Username</p>
          <input
            type={'text'}
            value={valueForm.username}
            onChange={(e) => setValueForm({ ...valueForm, username: e.target.value })}
          />
        </label>
        <label>
          <p>Password: </p>
          <input
            type={'password'}
            value={valueForm.password}
            onChange={(e) => setValueForm({ ...valueForm, password: e.target.value })}
          />
        </label>
        <button>Send</button>
        <ButtonClose onClick={() => setModalFormUsers({ login: false, register: false })} />
      </form>
    </div>
  )
}

export default PortalLoginForm
