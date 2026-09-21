const STORAGE_KEY = 'loggedBlogappUser'

export const getUser = () => {
  const savedUser = window.localStorage.getItem(STORAGE_KEY)

  return savedUser ? JSON.parse(savedUser) : null
}

export const saveUser = (user) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export const removeUser = () => {
  window.localStorage.removeItem(STORAGE_KEY)
}
