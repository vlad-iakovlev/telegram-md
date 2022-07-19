import { toMarkdown } from './_toMarkdown';

/**
 * Creates inline code
 * @param code input
 * @signature
 *    md.inlineCode(code)
 * @example
 *    md.inlineCode('foo_bar') // => '`foo\\_bar`'
 */
export const inlineCode = (code: unknown) => {
  if (!code) {
    return toMarkdown();
  }

  return toMarkdown(`\`${toMarkdown(code)}\``, true);
};
