import { Markdown, md } from '@telegram-md/core'
import { Context, NextFunction } from 'grammy'

function replyWithMarkdown(
  this: Context,
  text: string | Markdown,
  other?: Parameters<Context['reply']>[1],
  signal?: Parameters<Context['reply']>[2],
) {
  return this.reply(
    md.build(text),
    {
      parse_mode: 'MarkdownV2',
      ...other,
    },
    signal,
  )
}

export type MarkdownFlavour = {
  replyWithMarkdown: typeof replyWithMarkdown
}

export const markdownPlugin =
  () => async (ctx: Context & MarkdownFlavour, next: NextFunction) => {
    ctx.replyWithMarkdown = replyWithMarkdown
    await next()
  }
