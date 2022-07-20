import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Make text bold
 * @example
 * md.bold('bold *text') // => Markdown with value '*bold \*text*'
 */
export const bold = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown();
  }

  return _toMarkdown(`*${_toMarkdown(text)}*`, true);
};
