import { useMemo } from 'react'
import { useAnecdotes } from '../hooks'

const AnecdoteList = () => {
  const { anecdotes, deleteAnecdote } = useAnecdotes()

  const anecdotesByVotes = useMemo(
    () => [...anecdotes].sort((a, b) => b.votes - a.votes),
    [anecdotes]
  )

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotesByVotes.map(anecdote => (
          <li key={anecdote.id}>
            {anecdote.content}
            <button onClick={() => deleteAnecdote(anecdote.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
