export const fetchIcons = async (user, jwt) => {
  return await fetch(`${import.meta.env.VITE_HOST}iconsData/${user}`, {
  // return fetch(`https://shortcut-app.herokuapp.com/iconsData/${user}`, {
    headers: { Authorization: `"Bearer ${jwt}"` },
  })
}
