import { Button, Container, TextField } from '@mui/material'
import { useField } from '../hooks/useField'

const BlogForm = ({ createBlog }) => {
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')

  const addBlog = (event) => {
    event.preventDefault()

    createBlog({ title: title.value, author: author.value, url: url.value })

    resetTitle()
    resetAuthor()
    resetUrl()
  }

  return (
    <Container maxWidth="sm">
      <h2>create new blog</h2>
      <form onSubmit={addBlog}>
        <div>
          <TextField label="title" name="title" {...title} />
        </div>
        <div>
          <TextField label="author" name="author" {...author} />
        </div>
        <div>
          <TextField label="url" name="url" {...url} />
        </div>
        <Button variant="contained" color="primary" type="submit">
          create
        </Button>
      </form>
    </Container>
  )
}

export default BlogForm
