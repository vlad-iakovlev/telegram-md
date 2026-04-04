import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Underline text
 * @example
 * md.underline('underline') // => Markdown with value '__underline__'
 */
export const underline = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }

  return _toMarkdown(`__${_toMarkdown(text)}__`, true)
}
