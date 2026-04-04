import { expect, test } from 'vitest'
import { bold } from './bold.js'

test('should return empty string', () => {
  expect(bold('').value).toBe('')
})

test('should return formatted value', () => {
  expect(bold('foo_bar').value).toBe('*foo\\_bar*')
})
