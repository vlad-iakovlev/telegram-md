import { expect, test } from 'vitest'
import { spoiler } from './spoiler.js'

test('should return empty string', () => {
  expect(spoiler('').value).toBe('')
})

test('should return formatted value', () => {
  expect(spoiler('foo_bar').value).toBe('||foo\\_bar||')
})
