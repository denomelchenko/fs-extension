import { useParams } from 'react-router-dom'
import Blog from './Blog'
import Comments from './Comments'
import NotFound from './NotFound'
import { useBlogs } from '../hooks/useBlogs'

const SingleBlog = ({ user, handleLike, handleDelete }) => {
  const { id } = useParams()
  const { blogs, isPending } = useBlogs()

  if (isPending) {
    return null
  }

  const blog = blogs.find((candidate) => candidate.id === id)

  if (!blog) {
    return <NotFound />
  }

  return (
    <div>
      <Blog blog={blog} user={user} handleLike={handleLike} handleDelete={handleDelete} />
      <Comments comments={blog.comments} />
    </div>
  )
}

export default SingleBlog
