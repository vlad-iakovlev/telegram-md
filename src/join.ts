import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const join = (texts: MayBeMarkdown[], separator: MayBeMarkdown = '') => {
  const value = texts
    .map((text) => toMarkdown(text))
    .join(String(toMarkdown(separator)));

  return toMarkdown(value, true);
};
