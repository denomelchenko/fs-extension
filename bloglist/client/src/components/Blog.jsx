import { useParams } from 'react-router-dom'
import { Button, Paper, Stack, Typography } from '@mui/material'
import NotFound from './NotFound'

const Blog = ({ blogs, user, handleLike, handleDelete }) => {
  const id = useParams().id
  const blog = blogs.find((candidate) => candidate.id === id)

  // A direct reload of /blogs/:id reaches this component before the blog list has
  // arrived, and a well-formed but nonexistent id never matches. Both render the
  // same page-not-found view instead of dereferencing "blog".
  if (!blog) {
    return <NotFound />
  }

  const own = user && blog.user && user.username === blog.user.username

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h5">{blog.title}</Typography>
      <Typography>{blog.author}</Typography>
      <Typography>
        <a href={blog.url}>{blog.url}</a>
      </Typography>
      <Typography>likes {blog.likes}</Typography>
      <Typography>{blog.user.name}</Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        {user && (
          <Button variant="contained" color="primary" onClick={() => handleLike(blog)}>
            like
          </Button>
        )}
        {own && (
          <Button variant="outlined" color="error" onClick={() => handleDelete(blog)}>
            delete
          </Button>
        )}
      </Stack>
    </Paper>
  )
}

export default Blog
