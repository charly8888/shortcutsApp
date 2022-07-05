export const fetchIcons = async (user, jwt) => {
  return fetch(`${import.meta.env.VITE_HOST}iconsData/${user}`, {
    headers: { Authorization: `"Bearer ${jwt}"` },
  })
}
