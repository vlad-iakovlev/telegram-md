import { _toMarkdown } from './_toMarkdown.js'

/**
 * Build message text for telegram API
 * @example
 * md.build(md`Hello, ${md.bold('World')}!`) // => 'Hello, *World*\\!'
 * md.build('Hello, World!') // => 'Hello, World\\!'
 */
export const build = (text: unknown): string => _toMarkdown(text).value
