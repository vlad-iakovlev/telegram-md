import { Markdown } from './markdown';
import { _toMarkdown } from './_toMarkdown';

/**
 * Create code block
 * @example
 * md.code('pre-formatted fixed-width code block')
 * // => Markdown with value '```\npre\\-formatted fixed\\-width code block\n```'
 *
 * md.code('pre-formatted fixed-width code block written in the Python', 'python')
 * // => Markdown with value '```python\npre\\-formatted fixed\\-width code block written in the Python\n```'
 */
export const codeBlock = (code: unknown, language = ''): Markdown => {
  if (!code) {
    return _toMarkdown();
  }

  return _toMarkdown(`\`\`\`${_toMarkdown(language)}\n${_toMarkdown(code)}\n\`\`\``, true);
};
