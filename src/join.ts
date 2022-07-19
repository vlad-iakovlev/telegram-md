import { toMarkdown } from './_toMarkdown';

/**
 * Join items
 * @param texts items for join
 * @params separator optional separator, '' by default
 * @signature
 *    md.join(texts, separator)
 * @example
 *    md.join(['foo_bar', 'bar_baz'], '\n') // => 'foo\\_bar\nbar\\_baz'
 */
export const join = (texts: unknown[], separator: unknown = '') => {
  const value = texts
    .map((text) => toMarkdown(text))
    .join(String(toMarkdown(separator)));

  return toMarkdown(value, true);
};
