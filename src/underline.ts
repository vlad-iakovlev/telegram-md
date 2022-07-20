import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Underline text
 * @example
 * md.underline('underline') // => '__underline__'
 */
export const underline = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown();
  }

  return _toMarkdown(`__${_toMarkdown(text)}__`, true);
};
