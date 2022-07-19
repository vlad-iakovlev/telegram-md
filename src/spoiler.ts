import { toMarkdown } from './_toMarkdown';

/**
 * Creates spoiler
 * @param text input
 * @signature
 *    md.spoiler(text)
 * @example
 *    md.spoiler('foo_bar') // => '||foo\\_bar||'
 */
export const spoiler = (text: unknown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`||${toMarkdown(text)}||`, true);
};
