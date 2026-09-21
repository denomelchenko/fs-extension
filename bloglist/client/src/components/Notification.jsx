import { Alert } from '@mui/material'
import { useNotification } from '../contexts/NotificationContext'

const Notification = () => {
  const { notification } = useNotification()

  if (!notification) {
    return null
  }

  return (
    <Alert severity={notification.type === 'error' ? 'error' : 'success'} sx={{ mt: 2 }}>
      {notification.text}
    </Alert>
  )
}

export default Notification
