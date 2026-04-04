import { _toMarkdown } from './_toMarkdown.js'
import { blockquote } from './blockquote.js'
import { bold } from './bold.js'
import { build } from './build.js'
import { codeBlock } from './codeBlock.js'
import { inlineCode } from './inlineCode.js'
import { italic } from './italic.js'
import { join } from './join.js'
import { link } from './link.js'
import { Markdown } from './markdown.js'
import { spoiler } from './spoiler.js'
import { strikethrough } from './strikethrough.js'
import { underline } from './underline.js'

// istanbul ignore next
export { Markdown }

/**
 * Creates Markdown from template
 * @example
 * md`Hello, ${md.bold('World')}!` // => Markdown with value 'Hello, *World*\\!'
 */
export const md = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): Markdown => {
  let result = `${_toMarkdown(strings[0])}`

  for (let i = 1; i < strings.length; i += 1) {
    result += `${_toMarkdown(values[i - 1])}${_toMarkdown(strings[i])}`
  }

  return _toMarkdown(result, true)
}

md.blockquote = blockquote
md.bold = bold
md.build = build
md.codeBlock = codeBlock
md.inlineCode = inlineCode
md.italic = italic
md.join = join
md.link = link
md.spoiler = spoiler
md.strikethrough = strikethrough
md.underline = underline
