import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const underline = (text: MayBeMarkdown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`__${toMarkdown(text)}__`, true);
};
