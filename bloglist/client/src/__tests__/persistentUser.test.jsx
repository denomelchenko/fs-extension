import { beforeEach, expect, test } from 'vitest'
import { getUser, removeUser, saveUser } from '../services/persistentUser'

beforeEach(() => {
  removeUser()
})

test('round-trips the logged-in user through the persistent user service', () => {
  expect(getUser()).toBeNull()

  saveUser({ token: 'token-1', username: 'mluukkai', name: 'Matti Luukkainen' })

  expect(getUser()).toEqual({ token: 'token-1', username: 'mluukkai', name: 'Matti Luukkainen' })

  removeUser()

  expect(getUser()).toBeNull()
})
