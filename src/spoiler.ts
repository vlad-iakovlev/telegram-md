import { _toMarkdown } from './_toMarkdown.js'
import { Markdown } from './markdown.js'

/**
 * Creates spoiler
 * @example
 * md.spoiler('spoiler') // => Markdown with value '||spoiler||'
 */
export const spoiler = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown()
  }

  return _toMarkdown(`||${_toMarkdown(text)}||`, true)
}
