import { Button, Paper, Stack, Typography } from '@mui/material'

const Blog = ({ blog, user, handleLike, handleDelete }) => {
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
