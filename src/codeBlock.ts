import { toMarkdown } from './_toMarkdown';

/**
 * Creates code block
 * @param code input
 * @param language optional language
 * @signature
 *    md.codeBlock(code, language)
 * @example
 *    md.codeBlock('foo_bar', 'python') // => '```python\nfoo\\_bar\n```'
 */
export const codeBlock = (code: unknown, language = '') => {
  if (!code) {
    return toMarkdown();
  }

  return toMarkdown(`\`\`\`${toMarkdown(language)}\n${toMarkdown(code)}\n\`\`\``, true);
};
