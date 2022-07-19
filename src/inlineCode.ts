import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const inlineCode = (code: MayBeMarkdown) => {
  if (!code) {
    return toMarkdown();
  }

  return toMarkdown(`\`${toMarkdown(code)}\``, true);
};
