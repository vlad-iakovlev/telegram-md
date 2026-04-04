import { expect, test } from 'vitest'
import { link } from './link.js'

test('should return empty string', () => {
  expect(link('', '').value).toBe('')
})

test('should return formatted url', () => {
  expect(link('', 'https://test.com?q=4').value).toBe(
    'https://test\\.com?q\\=4',
  )
})

test('should return formatted name', () => {
  expect(link('foo_bar', '').value).toBe('foo\\_bar')
})

test('should return formatted value', () => {
  expect(link('foo_bar', 'https://test.com?q=4').value).toBe(
    '[foo\\_bar](https://test\\.com?q\\=4)',
  )
})
