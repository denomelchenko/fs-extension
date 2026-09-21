import { useQuery } from '@tanstack/react-query'
import usersService from '../services/users'

export const useUsers = () => {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: usersService.getAll,
  })

  return {
    users: usersQuery.data,
    isPending: usersQuery.isPending,
    isError: usersQuery.isError,
  }
}
