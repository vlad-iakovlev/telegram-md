import { _toMarkdown } from './_toMarkdown.js'
import { md } from './index.js'

test('should build from template', () => {
  expect(md`Hello, @${_toMarkdown('jonny_john')}! foo_bar!!`.value).toBe(
    'Hello, @jonny\\_john\\! foo\\_bar\\!\\!',
  )
})
