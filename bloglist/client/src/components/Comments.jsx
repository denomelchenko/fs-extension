import { Button, List, ListItem, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
import { useField } from '../hooks/useField'

const Comments = ({ comments = [], addComment }) => {
  const { reset, ...comment } = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    addComment(comment.value)
    reset()
  }

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        comments
      </Typography>
      <List dense>
        {comments.map((text, index) => (
          <ListItem key={index + ':' + text} divider>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }} alignItems="center">
          <TextField label="comment" name="comment" size="small" {...comment} />
          <Button variant="contained" type="submit">
            add comment
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default Comments
