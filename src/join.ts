import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Join items
 * @example
 *    md.join(['foo_bar', 'bar_baz'], '\n') // => 'foo\\_bar\nbar\\_baz'
 */
export const join = (texts: unknown[], separator: unknown = ''): Markdown => {
  const value = texts
    .map((text) => _toMarkdown(text))
    .join(String(_toMarkdown(separator)));

  return _toMarkdown(value, true);
};
