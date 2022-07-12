export const fetchRegisterUser = async (user, password) => {
  return await fetch(`https://shortcut-app.herokuapp.com/setUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, password }),
  })
}
