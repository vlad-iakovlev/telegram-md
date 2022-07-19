import { toMarkdown } from './_toMarkdown';

/**
 * Strikethrough text
 * @param text input
 * @signature
 *    md.strikethrough(text)
 * @example
 *    md.strikethrough('foo_bar') // => '~foo\\_bar~'
 */
export const strikethrough = (text: unknown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`~${toMarkdown(text)}~`, true);
};
