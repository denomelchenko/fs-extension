import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import blogService from '../services/blogs'

export const useBlogs = () => {
  const queryClient = useQueryClient()

  const blogsQuery = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAll,
  })

  const createBlogMutation = useMutation({
    mutationFn: blogService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
    },
  })

  return {
    blogs: blogsQuery.data,
    isPending: blogsQuery.isPending,
    isError: blogsQuery.isError,
    addBlog: createBlogMutation.mutateAsync,
  }
}
