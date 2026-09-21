import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import blogService from '../services/blogs'

export const useBlogs = () => {
  const queryClient = useQueryClient()

  const invalidateBlogs = () => queryClient.invalidateQueries({ queryKey: ['blogs'] })

  const blogsQuery = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAll,
  })

  const createBlogMutation = useMutation({
    mutationFn: blogService.create,
    onSuccess: invalidateBlogs,
  })

  const likeBlogMutation = useMutation({
    mutationFn: ({ id, blog }) => blogService.update(id, blog),
    onSuccess: invalidateBlogs,
  })

  const deleteBlogMutation = useMutation({
    mutationFn: (id) => blogService.remove(id),
    onSuccess: invalidateBlogs,
  })

  return {
    blogs: blogsQuery.data,
    isPending: blogsQuery.isPending,
    isError: blogsQuery.isError,
    addBlog: createBlogMutation.mutateAsync,
    likeBlog: likeBlogMutation.mutateAsync,
    deleteBlog: deleteBlogMutation.mutateAsync,
  }
}
