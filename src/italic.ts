import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Make text italic
 * @example
 * md.italic('italic *text') // => Markdown with value '_italic \*text_'
 */
export const italic = (text: unknown): Markdown => {
  if (!text) {
    return _toMarkdown();
  }

  return _toMarkdown(`_${_toMarkdown(text)}_`, true);
};
