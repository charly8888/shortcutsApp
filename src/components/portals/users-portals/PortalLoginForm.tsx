import { useState } from 'react'
import styles from './PortalForm.module.scss'
async function handleSubmitLogin(e, user, password) {
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
    } else {
      console.log(data)
    }
  } catch (e) {
    console.log('error', e)
  }
}
const PortalLoginForm = () => {
  const [valueForm, setValueForm] = useState({ username: '', password: '' })
  return (
    <form
      onSubmit={(e) => handleSubmitLogin(e, valueForm.username, valueForm.password)}
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
    </form>
  )
}

export default PortalLoginForm
