import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import Comments from '../components/Comments'

test('renders every comment and submits a new one through the handler', async () => {
  const addComment = vi.fn()
  const user = userEvent.setup()

  render(<Comments comments={['first comment']} addComment={addComment} />)

  expect(screen.getByText('first comment')).toBeInTheDocument()

  await user.type(screen.getByRole('textbox', { name: /comment/i }), 'second comment')
  await user.click(screen.getByRole('button', { name: /add comment/i }))

  expect(addComment.mock.calls).toHaveLength(1)
  expect(addComment.mock.calls[0][0]).toBe('second comment')
})
