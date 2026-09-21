import { useParams } from 'react-router-dom'
import { Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import NotFound from './NotFound'
import { useUsers } from '../hooks/useUsers'

const UserView = () => {
  const { id } = useParams()
  const { users, isPending } = useUsers()

  if (isPending) {
    return null
  }

  const user = users.find((candidate) => candidate.id === id)

  if (!user) {
    return <NotFound />
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        added blogs
      </Typography>
      <Paper>
        <List dense>
          {user.blogs.map((blog) => (
            <ListItem key={blog.id} divider>
              <ListItemText primary={blog.title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default UserView
