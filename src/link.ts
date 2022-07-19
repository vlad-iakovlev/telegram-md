import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const link = (name: MayBeMarkdown, url: MayBeMarkdown) => {
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
