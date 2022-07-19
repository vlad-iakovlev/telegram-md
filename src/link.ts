import { toMarkdown } from './_toMarkdown';

/**
 * Creates link
 * @param name link name
 * @param url link url
 * @signature
 *    md.link(name, url)
 * @example
 *    md.link('google', 'https://google.com) // => '[google](https://google\\.com)'
 */
export const link = (name: unknown, url: unknown) => {
  if (!name && !url) {
    return toMarkdown();
  }

  if (!name) {
    return toMarkdown(url);
  }

  if (!url) {
    return toMarkdown(name);
  }

  return toMarkdown(`[${toMarkdown(name)}](${toMarkdown(url)})`, true);
};
