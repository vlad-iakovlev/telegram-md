import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Strikethrough text
 * @example
 * md.strikethrough('strikethrough') // => '~strikethrough~'
 */
export const strikethrough = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown();
  }

  return _toMarkdown(`~${_toMarkdown(text)}~`, true);
};
