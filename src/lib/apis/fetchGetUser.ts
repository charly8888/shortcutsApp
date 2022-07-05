export const fetchGetUser = async (user, password) => {
  console.log(import.meta.env.VITE_HOST)
  return await fetch(`${import.meta.env.VITE_HOST}getUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, password }),
  })
}

