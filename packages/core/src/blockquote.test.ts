import { expect, test } from 'vitest'
import { blockquote } from './blockquote.js'

test('should return empty string', () => {
  expect(blockquote('').value).toBe('')
})

test('should return formatted value', () => {
  expect(blockquote('foo_bar').value).toBe('>foo\\_bar')
})
