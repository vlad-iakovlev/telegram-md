import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Make text with blockquote
 * @example
 * md.blockquote('text') // => Markdown with value '>text'
 */
export const blockquote = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }

  return _toMarkdown(`>${_toMarkdown(text)}`, true)
}
