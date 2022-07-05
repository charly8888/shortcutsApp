export const fetchSetIcons = async (user, icons, jwt) => {
  return await fetch(`${import.meta.env.VITE_HOST}setInfo/${user}`, {
    method: 'PUT',
    body: JSON.stringify({
      user,
      info: [...icons],
    }),
    headers: { 'Authorization': `"Bearer ${jwt}"`, 'Content-Type': 'application/json' },
  })
}
