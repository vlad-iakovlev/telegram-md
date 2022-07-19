import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const italic = (text: MayBeMarkdown) => {
  if (!text) {
    return toMarkdown();
  }

  return toMarkdown(`_${toMarkdown(text)}_`, true);
};
