import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import ErrorBoundary from './components/ErrorBoundary'
import LoginForm from './components/LoginForm'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import Notification from './components/Notification'
import SingleBlog from './components/SingleBlog'
import UserList from './components/UserList'
import UserView from './components/UserView'
import { useNotify } from './contexts/NotificationContext'
import { useUser } from './contexts/UserContext'
import { useBlogs } from './hooks/useBlogs'

const App = () => {
  const { user, login, logout } = useUser()
  const notify = useNotify()
  const { addBlog, likeBlog, deleteBlog } = useBlogs()
  const navigate = useNavigate()

  const handleLogin = async (username, password) => {
    try {
      const loggedUser = await login(username, password)

      notify({ text: 'logged in as ' + loggedUser.name, type: 'success' })
      navigate('/')
    } catch {
      notify({ text: 'wrong username or password', type: 'error' })
    }
  }

  const handleLogout = () => {
    logout()
    notify({ text: 'logged out', type: 'success' })
    navigate('/')
  }

  const handleCreate = async (blogObject) => {
    try {
      const createdBlog = await addBlog(blogObject)

      notify({
        text: 'a new blog ' + createdBlog.title + ' by ' + createdBlog.author + ' added',
        type: 'success',
      })
      navigate('/')
    } catch {
      notify({ text: 'blog could not be created', type: 'error' })
    }
  }

  const handleLike = async (blog) => {
    const changedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    }

    try {
      await likeBlog({ id: blog.id, blog: changedBlog })
    } catch {
      notify({ text: 'liking the blog failed', type: 'error' })
    }
  }

  const handleDelete = async (blog) => {
    if (!window.confirm('Remove blog ' + blog.title + ' by ' + blog.author)) {
      return
    }

    try {
      await deleteBlog(blog.id)
      notify({ text: 'blog ' + blog.title + ' removed', type: 'success' })
      navigate('/')
    } catch {
      notify({ text: 'deleting the blog failed', type: 'error' })
    }
  }

  return (
    <div>
      <Navigation user={user} onLogout={handleLogout} />
      <Notification />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <LoginForm onLogin={handleLogin} />}
          />
          <Route
            path="/blogs/new"
            element={user ? <BlogForm createBlog={handleCreate} /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/blogs/:id"
            element={<SingleBlog user={user} handleLike={handleLike} handleDelete={handleDelete} />}
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
