import { Button, TextField, Typography } from '@mui/material'
import { useField } from '../hooks/useField'

const Comments = ({ comments = [], addComment }) => {
  const { reset, ...comment } = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    addComment(comment.value)
    reset()
  }

  return (
    <div>
      <Typography variant="h6">comments</Typography>
      <ul>
        {comments.map((text, index) => (
          <li key={index + ':' + text}>{text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField label="comment" name="comment" size="small" {...comment} />
        </div>
        <Button variant="contained" type="submit" sx={{ mt: 1 }}>
          add comment
        </Button>
      </form>
    </div>
  )
}

export default Comments
