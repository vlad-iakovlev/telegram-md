import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Make text bold
 * @example
 * md.bold('bold *text') // => '*bold \*text*'
 */
export const bold = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown();
  }

  return _toMarkdown(`*${_toMarkdown(text)}*`, true);
};
