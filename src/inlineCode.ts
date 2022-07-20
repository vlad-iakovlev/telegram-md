import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Create inline code
 * @example
 * md.inlineCode('inline fixed-width code') // => Markdown with value '`inline fixed\\-width code`'
 */
export const inlineCode = (code: unknown): Markdown => {
  if (!code) {
    return _toMarkdown();
  }

  return _toMarkdown(`\`${_toMarkdown(code)}\``, true);
};
