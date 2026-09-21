import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import usersService from '../services/users'
import UserList from '../components/UserList'

vi.mock('../services/users')

test('renders one row per user with the number of blogs they have added', async () => {
  usersService.getAll.mockResolvedValue([
    {
      id: 'u1',
      username: 'blogger',
      name: 'Blogging Betty',
      blogs: [
        { id: 'b1', title: 'First blog by Betty' },
        { id: 'b2', title: 'Second blog by Betty' },
      ],
    },
    { id: 'u2', username: 'lurker', name: 'Lurking Larry', blogs: [] },
  ])

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(await screen.findByRole('link', { name: 'Blogging Betty' })).toBeInTheDocument()
  expect(screen.getByRole('row', { name: /blogging betty/i })).toHaveTextContent('2')
  expect(screen.getByRole('row', { name: /lurking larry/i })).toHaveTextContent('0')
})
