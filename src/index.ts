import { _toMarkdown } from './_toMarkdown.js'
import { bold as boldFunc } from './bold.js'
import { build as buildFunc } from './build.js'
import { codeBlock as codeBlockFunc } from './codeBlock.js'
import { inlineCode as inlineCodeFunc } from './inlineCode.js'
import { italic as italicFunc } from './italic.js'
import { join as joinFunc } from './join.js'
import { link as linkFunc } from './link.js'
import { Markdown } from './markdown.js'
import { spoiler as spoilerFunc } from './spoiler.js'
import { strikethrough as strikethroughFunc } from './strikethrough.js'
import { underline as underlineFunc } from './underline.js'

export { Markdown }

/**
 * Creates Markdown from template
 * @example
 * md`Hello, ${md.bold('World')}!` // => Markdown with value 'Hello, *World*\\!'
 */
export function md(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Markdown {
  let result = `${_toMarkdown(strings[0])}`

  for (let i = 1; i < strings.length; i += 1) {
    result += `${_toMarkdown(values[i - 1])}${_toMarkdown(strings[i])}`
  }

  return _toMarkdown(result, true)
}

md.bold = boldFunc
md.build = buildFunc
md.codeBlock = codeBlockFunc
md.inlineCode = inlineCodeFunc
md.italic = italicFunc
md.join = joinFunc
md.link = linkFunc
md.spoiler = spoilerFunc
md.strikethrough = strikethroughFunc
md.underline = underlineFunc
