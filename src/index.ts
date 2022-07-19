import { bold as boldFunc } from './bold';
import { build as buildFunc } from './build';
import { codeBlock as codeBlockFunc } from './codeBlock';
import { toMarkdown } from './_toMarkdown';
import { inlineCode as inlineCodeFunc } from './inlineCode';
import { italic as italicFunc } from './italic';
import { join as joinFunc } from './join';
import { link as linkFunc } from './link';
import { spoiler as spoilerFunc } from './spoiler';
import { strikethrough as strikethroughFunc } from './strikethrough';
import { underline as underlineFunc } from './underline';

export { MayBeMarkdown as MayBeEscaped } from './_toMarkdown';

export function md(strings: TemplateStringsArray, ...values: unknown[]) {
  let result = `${toMarkdown(strings[0])}`;

  for (let i = 1; i < strings.length; i += 1) {
    result += `${toMarkdown(values[i - 1])}${toMarkdown(strings[i])}`;
  }

  return toMarkdown(result, true);
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
