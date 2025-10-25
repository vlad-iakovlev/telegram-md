import { expect, test } from 'vitest'
import { strikethrough } from './strikethrough.js'

test('should return empty string', () => {
  expect(strikethrough('').value).toBe('')
})

test('should return formatted value', () => {
  expect(strikethrough('foo_bar').value).toBe('~foo\\_bar~')
})
