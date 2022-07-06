import { useState } from 'react'
import { fetchRegisterUser } from '../../../lib/apis'
import ButtonClose from '../../UIComponents/ButtonClose'
import styles from './PortalForm.module.scss'

function autenticateFormRegister({ username, password, password2 }) {
  if (username.length < 2) {
    return {
      case: 'username',
      message: '* Username muy corto',
    }
  } else if (username.length > 16) {
    return {
      case: 'username',
      message: '* Username muy largo',
    }
  } else if (password.length < 8) {
    return {
      case: 'password',
      message: '* Contraseña muy corta',
    }
  } else if (password.length > 100) {
    return {
      case: 'password',
      message: '* Contraseña demasiado larga',
    }
  } else if (password !== password2) {
    return {
      case: 'comprobation',
      message: '* Contraseñas no coinciden',
    }
  } else {
    return {
      case: true,
      message: 'All ok',
    }
  }
}

async function handleSubmitRegister(e, user, password, setValueFormRegister, setModalFormUsers) {
  e.preventDefault()
  try {
    const result = await fetchRegisterUser(user, password)
    const data = await result.json()

    if (result.ok) {
      console.log('all OK', data)
      setValueFormRegister({
        username: '',
        password: '',
        password2: '',
      })
      setModalFormUsers({ login: false, register: false })
    } else {
      console.log('result error', data)
    }
  } catch (e) {
    console.log('error', e)
  }
}

const PortalRegisterForm = ({ setModalFormUsers }) => {
  const [valueFormRegister, setValueFormRegister] = useState({
    username: '',
    password: '',
    password2: '',
  })

  const isFormValid = autenticateFormRegister(valueFormRegister)
  console.log(isFormValid)

  return (
    <form
      onSubmit={(e) => {
        handleSubmitRegister(
          e,
          valueFormRegister.username,
          valueFormRegister.password,
          setValueFormRegister,
          setModalFormUsers
        )
      }}
      className={styles.loginForm}
    >
      <input
        type={'text'}
        placeholder='Username'
        value={valueFormRegister.username}
        onChange={(e) => setValueFormRegister({ ...valueFormRegister, username: e.target.value })}
      />
      {isFormValid.case === 'username' && <p>{isFormValid.message}</p>}
      <input
        placeholder='Password'
        type={'password'}
        value={valueFormRegister.password}
        onChange={(e) => setValueFormRegister({ ...valueFormRegister, password: e.target.value })}
      />
      {isFormValid.case === 'password' && <p>{isFormValid.message}</p>}
      <input
        placeholder='Repeat password'
        type={'password'}
        value={valueFormRegister.password2}
        onChange={(e) => setValueFormRegister({ ...valueFormRegister, password2: e.target.value })}
      />
      {isFormValid.case === 'comprobation' && <p>{isFormValid.message}</p>}
      <button disabled={isFormValid.case !== true} className={styles.buttonAceppt}>
        Register
      </button>

      <ButtonClose
        onClick={() => setModalFormUsers({ login: false, register: false })}
        borderRadius={'.5rem 0'}
      />
    </form>
  )
}

export default PortalRegisterForm
