import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const codeBlock = (code: MayBeMarkdown, language = '') => {
  if (!code) {
    return toMarkdown();
  }

  return toMarkdown(`\`\`\`${toMarkdown(language)}\n${toMarkdown(code)}\n\`\`\``, true);
};
