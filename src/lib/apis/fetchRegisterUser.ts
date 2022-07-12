export const fetchRegisterUser = async (user, password) => {
  return await fetch(`${import.meta.env.VITE_HOST}setUser`, {
  // return await fetch(`https://shortcut-app.herokuapp.com/setUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, password }),
  })
}
