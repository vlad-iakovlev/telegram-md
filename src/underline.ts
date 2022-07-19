import { toMarkdown } from './_toMarkdown';

/**
 * Underline text
 * @param text input
 * @signature
 *    md.underline(text)
 * @example
 *    md.underline('foo_bar') // => '__foo\\_bar__'
 */
export const underline = (text: unknown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`__${toMarkdown(text)}__`, true);
};
