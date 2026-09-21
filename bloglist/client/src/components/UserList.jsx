import { Link } from 'react-router-dom'
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useUsers } from '../hooks/useUsers'

const UserList = () => {
  const { users, isPending, isError } = useUsers()

  if (isPending) {
    return null
  }

  if (isError) {
    return (
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <Typography>users could not be loaded</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="right">blogs created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Link to={'/users/' + user.id}>{user.name}</Link>
                </TableCell>
                <TableCell align="right">{user.blogs.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default UserList
