import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import Blog from './Blog'
import Comments from './Comments'
import NotFound from './NotFound'
import { useBlogs } from '../hooks/useBlogs'

const SingleBlog = ({ user, handleLike, handleDelete }) => {
  const { id } = useParams()
  const { blogs, isPending, addComment } = useBlogs()

  if (isPending) {
    return null
  }

  const blog = blogs.find((candidate) => candidate.id === id)

  if (!blog) {
    return <NotFound />
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Blog blog={blog} user={user} handleLike={handleLike} handleDelete={handleDelete} />
      <Comments
        comments={blog.comments}
        addComment={(comment) => addComment({ id: blog.id, comment })}
      />
    </Container>
  )
}

export default SingleBlog
