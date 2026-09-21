import { useParams } from 'react-router-dom'
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
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserView
