import { Markdown } from './markdown';

export const _toMarkdown = (text?: unknown, escaped?: boolean) => {
  if (text instanceof Markdown) {
    return text;
  }

  return new Markdown(text, escaped);
};
