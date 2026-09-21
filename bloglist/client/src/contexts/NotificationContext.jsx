import { createContext, useContext, useReducer, useRef } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.payload
    case 'clear':
      return null
    default:
      return state
  }
}

export const NotificationContextProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, null)
  const timerRef = useRef(null)

  const notify = (message) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    dispatch({ type: 'set', payload: message })
    timerRef.current = setTimeout(() => dispatch({ type: 'clear' }), 5000)
  }

  return (
    <NotificationContext.Provider value={{ notification, notify }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)

export const useNotify = () => useContext(NotificationContext).notify
