import { createContext, useContext, useEffect, useState } from 'react'
import blogService from '../services/blogs'
import loginService from '../services/login'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')

    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
      blogService.setToken(loggedUser.token)
    }
  }, [])

  const login = async (username, password) => {
    const loggedUser = await loginService.login({ username, password })

    window.localStorage.setItem('loggedBlogappUser', JSON.stringify(loggedUser))
    blogService.setToken(loggedUser.token)
    setUser(loggedUser)

    return loggedUser
  }

  const logout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    blogService.setToken(null)
    setUser(null)
  }

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
