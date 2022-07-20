import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Creates link
 * @example
 * md.link('inline URL', 'http://www.example.com/')
 * // => Markdown with value '[inline URL](http://www\\.example\\.com/)'
 *
 * md.link('inline mention of a user', 'tg://user?id=123456789')
 * // => Markdown with value '[inline mention of a user](tg://user?id\\=123456789)'
 */
export const link = (name: unknown, url: unknown): Markdown => {
  if (!name && !url) {
    return _toMarkdown();
  }

  if (!name) {
    return _toMarkdown(url);
  }

  if (!url) {
    return _toMarkdown(name);
  }

  return _toMarkdown(`[${_toMarkdown(name)}](${_toMarkdown(url)})`, true);
};
