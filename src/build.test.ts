import { expect, test } from 'vitest'
import { build } from './build.js'

test('should return formatted value', () => {
  expect(build('foo_bar')).toBe('foo\\_bar')
})
