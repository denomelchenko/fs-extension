import { Link } from 'react-router-dom'
import { useBlogs } from '../hooks/useBlogs'

const BlogList = () => {
  const { blogs, isPending, isError } = useBlogs()

  if (isPending) {
    return null
  }

  if (isError) {
    return <div>blogs could not be loaded</div>
  }

  const blogsByLikes = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      <h2>blogs</h2>
      <ul>
        {blogsByLikes.map((blog) => (
          <li className="blog" key={blog.id}>
            <Link to={'/blogs/' + blog.id}>
              {blog.title} {blog.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
