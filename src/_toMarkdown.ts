class Markdown {
  value: string;

  constructor(value: unknown = '', escaped = false) {
    this.value = escaped ? String(value) : Markdown.escape(String(value));
  }

  static escape(text: string) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
  }

  toString() {
    return this.value;
  }
}

export type MayBeMarkdown = string | Markdown;

export const toMarkdown = (value?: unknown, escaped?: boolean) => {
  if (value instanceof Markdown) {
    return value;
  }

  return new Markdown(value, escaped);
};
