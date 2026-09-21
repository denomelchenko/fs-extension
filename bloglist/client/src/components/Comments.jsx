import { Typography } from '@mui/material'

const Comments = ({ comments = [] }) => (
  <div>
    <Typography variant="h6">comments</Typography>
    <ul>
      {comments.map((comment, index) => (
        <li key={index + ':' + comment}>{comment}</li>
      ))}
    </ul>
  </div>
)

export default Comments
