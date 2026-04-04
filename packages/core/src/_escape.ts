export const _escape = (text: string) =>
  text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1')
