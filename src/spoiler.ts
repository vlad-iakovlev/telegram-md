import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Creates spoiler
 * @example
 * md.spoiler('spoiler') // => '||spoiler||'
 */
export const spoiler = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown();
  }

  return _toMarkdown(`||${_toMarkdown(text)}||`, true);
};
