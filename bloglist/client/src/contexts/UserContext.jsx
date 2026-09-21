import { createContext, useContext, useEffect, useState } from 'react'
import blogService from '../services/blogs'
import loginService from '../services/login'
import { getUser, removeUser, saveUser } from '../services/persistentUser'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = getUser()

    if (loggedUser) {
      setUser(loggedUser)
      blogService.setToken(loggedUser.token)
    }
  }, [])

  const login = async (username, password) => {
    const loggedUser = await loginService.login({ username, password })

    saveUser(loggedUser)
    blogService.setToken(loggedUser.token)
    setUser(loggedUser)

    return loggedUser
  }

  const logout = () => {
    removeUser()
    blogService.setToken(null)
    setUser(null)
  }

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
