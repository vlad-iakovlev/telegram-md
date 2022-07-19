import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const spoiler = (text: MayBeMarkdown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`||${toMarkdown(text)}||`, true);
};
