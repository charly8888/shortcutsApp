export const fetchIcons = async (user, jwt) => {
  return fetch(`https://shortcut-app.herokuapp.com/iconsData/${user}`, {
    headers: { Authorization: `"Bearer ${jwt}"` },
  })
}
