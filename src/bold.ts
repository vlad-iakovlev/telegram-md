import { toMarkdown } from './_toMarkdown';

/**
 * Make text bold
 * @param text input
 * @signature
 *    md.bold(text)
 * @example
 *    md.bold('foo_bar') // => '*foo\\_bar*'
 */
export const bold = (text: unknown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`*${toMarkdown(text)}*`, true);
};
