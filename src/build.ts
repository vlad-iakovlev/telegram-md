import { toMarkdown } from './_toMarkdown';

/**
 * Build text for telegram api from string or md.* return values
 * @param text input
 * @signature
 *    md.build(text)
 * @example
 *    md.build('foo_bar') // => 'foo\\_bar'
 */
export const build = (text: string | { value: string }) => toMarkdown(text).value;
