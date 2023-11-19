import { underline } from './underline.js'

test('should return empty string', () => {
  expect(underline('').value).toBe('')
})

test('should return formatted value', () => {
  expect(underline('foo_bar').value).toBe('__foo\\_bar__')
})
