import { useState } from 'react'
import styles from './PortalForm.module.scss'
function autenticateFormRegister({ username, password, password2 }) {
  if (username.length < 2) {
    return 'username muy corto'
  } else if (username.length > 32) {
    return 'username muy largo'
  } else if (password.length < 8) {
    return 'Contraseña muy corta'
  } else if (password !== password2) {
    return 'Contraseñas no coinciden'
  } else if (password.length > 100) {
    return 'Contraseña demasiado larga'
  } else {
    return 'todo Ok'
  }
}

async function handleSubmitRegister(e, user, password, setValueFormRegister) {
  e.preventDefault()
  try {
    const result = await fetch(`http://localhost:3333/setUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    })
    const data = await result.json()

    if (result.ok) {
      console.log('all OK', data)
      setValueFormRegister({
        username: '',
        password: '',
        password2: '',
      })
    } else {
      console.log('result error', data)
    }
  } catch (e) {
    console.log('error', e)
  }
}

const PortalRegisterForm = () => {
  const [valueFormRegister, setValueFormRegister] = useState({
    username: '',
    password: '',
    password2: '',
  })
  const isFormValid = autenticateFormRegister(valueFormRegister)
  console.log(isFormValid)
  return (
    <form
      onSubmit={(e) =>
        handleSubmitRegister(
          e,
          valueFormRegister.username,
          valueFormRegister.password,
          setValueFormRegister
        )
      }
      className={styles.loginForm}
    >
      <label>
        <p>Username</p>
        <input
          type={'text'}
          value={valueFormRegister.username}
          onChange={(e) => setValueFormRegister({ ...valueFormRegister, username: e.target.value })}
        />
      </label>
      <label>
        <p>Password: </p>
        <input
          type={'password'}
          value={valueFormRegister.password}
          onChange={(e) => setValueFormRegister({ ...valueFormRegister, password: e.target.value })}
        />
      </label>
      <label>
        <p>Password: </p>
        <input
          type={'password'}
          value={valueFormRegister.password2}
          onChange={(e) =>
            setValueFormRegister({ ...valueFormRegister, password2: e.target.value })
          }
        />
      </label>
      <button disabled={isFormValid !== 'todo Ok'}>Register</button>
    </form>
  )
}

export default PortalRegisterForm
