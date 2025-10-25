import { expect, test } from 'vitest'
import { inlineCode } from './inlineCode.js'

test('should return empty string', () => {
  expect(inlineCode('').value).toBe('')
})

test('should return formatted value', () => {
  expect(inlineCode('foo_bar').value).toBe('`foo\\_bar`')
})
