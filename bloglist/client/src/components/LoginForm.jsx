import { Button, Container, TextField } from '@mui/material'
import { useField } from '../hooks/useField'

const LoginForm = ({ onLogin }) => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const handleLogin = (event) => {
    event.preventDefault()
    onLogin(username.value, password.value)
    resetUsername()
    resetPassword()
  }

  return (
    <Container maxWidth="xs">
      <h2>login to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          <TextField label="username" name="username" {...username} />
        </div>
        <div>
          <TextField label="password" name="password" {...password} />
        </div>
        <Button variant="contained" color="primary" type="submit">
          login
        </Button>
      </form>
    </Container>
  )
}

export default LoginForm
