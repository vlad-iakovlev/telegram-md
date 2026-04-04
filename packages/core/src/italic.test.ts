import { expect, test } from 'vitest'
import { italic } from './italic.js'

test('should return empty string', () => {
  expect(italic('').value).toBe('')
})

test('should return formatted value', () => {
  expect(italic('foo_bar').value).toBe('_foo\\_bar_')
})
