import { toMarkdown, MayBeMarkdown } from './_toMarkdown';

export const build = (text: MayBeMarkdown) => toMarkdown(text).value;
