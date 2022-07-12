export const fetchGetUser = async (user, password) => {
  // return await fetch(`${import.meta.env.VITE_HOST}getUser`, {
    return await fetch(`https://shortcut-app.herokuapp.com/getUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, password }),
  })
}
