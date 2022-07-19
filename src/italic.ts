import { toMarkdown } from './_toMarkdown';

/**
 * Make text italic
 * @param text input
 * @signature
 *    md.italic(text)
 * @example
 *    md.italic('foo_bar') // => '_foo\\_bar_'
 */
export const italic = (text: unknown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`_${toMarkdown(text)}_`, true);
};
