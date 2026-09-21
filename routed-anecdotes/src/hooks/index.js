import { useCallback, useEffect, useState } from 'react'
import anecdoteService from '../services/anecdotes'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    reset,
  }
}

export const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([])

  useEffect(() => {
    anecdoteService.getAll().then((initialAnecdotes) => {
      setAnecdotes(initialAnecdotes)
    })
  }, [])

  const addAnecdote = useCallback(async (anecdote) => {
    const savedAnecdote = await anecdoteService.createNew(anecdote)

    setAnecdotes((current) => current.concat(savedAnecdote))

    return savedAnecdote
  }, [])

  const deleteAnecdote = useCallback(async (id) => {
    await anecdoteService.remove(id)

    setAnecdotes((current) => current.filter((anecdote) => anecdote.id !== id))
  }, [])

  return { anecdotes, addAnecdote, deleteAnecdote }
}
