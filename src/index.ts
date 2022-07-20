import { bold as boldFunc } from './bold';
import { build as buildFunc } from './build';
import { codeBlock as codeBlockFunc } from './codeBlock';
import { inlineCode as inlineCodeFunc } from './inlineCode';
import { italic as italicFunc } from './italic';
import { join as joinFunc } from './join';
import { link as linkFunc } from './link';
import { Markdown } from './markdown';
import { spoiler as spoilerFunc } from './spoiler';
import { strikethrough as strikethroughFunc } from './strikethrough';
import { underline as underlineFunc } from './underline';
import { _toMarkdown } from './_toMarkdown';

export { Markdown };

/**
 * Creates Markdown from template
 * @example
 * md`Hello, ${md.bold('World')}!` // => 'Hello, *World*\\!'
 */
export function md(strings: TemplateStringsArray, ...values: unknown[]): Markdown {
  let result = `${_toMarkdown(strings[0])}`;

  for (let i = 1; i < strings.length; i += 1) {
    result += `${_toMarkdown(values[i - 1])}${_toMarkdown(strings[i])}`;
  }

  return _toMarkdown(result, true);
}

/* istanbul ignore next */
export namespace md {
  export const bold = boldFunc;
  export const build = buildFunc;
  export const codeBlock = codeBlockFunc;
  export const inlineCode = inlineCodeFunc;
  export const italic = italicFunc;
  export const link = linkFunc;
  export const join = joinFunc;
  export const spoiler = spoilerFunc;
  export const strikethrough = strikethroughFunc;
  export const underline = underlineFunc;
}
