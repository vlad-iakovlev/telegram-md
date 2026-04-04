import { Context } from 'grammy'
import { expect, test, vi } from 'vitest'
import { MarkdownFlavour, markdownPlugin } from './index.js'

test('should set ctx.replyWithMarkdown and call next', async () => {
  const ctx = {} as any
  const order: string[] = []
  const next = vi.fn().mockImplementation(async () => {
    order.push('next1')
    await new Promise((resolve) => setTimeout(resolve, 0))
    order.push('next2')
  })

  order.push('start')
  await markdownPlugin()(ctx, next)
  order.push('end')

  expect(ctx.replyWithMarkdown).toBeInstanceOf(Function)
  expect(next).toHaveBeenCalledWith()
  expect(order).toEqual(['start', 'next1', 'next2', 'end'])
})

test('should run correctly when only text presented', async () => {
  const reply = vi.fn<Context['reply']>()
  const ctx = {
    reply: reply as Context['reply'],
  } as Context & MarkdownFlavour
  const next = vi.fn()

  await markdownPlugin()(ctx, next)
  await ctx.replyWithMarkdown('text_test')

  expect(reply).toHaveBeenCalledWith(
    'text\\_test',
    { parse_mode: 'MarkdownV2' },
    undefined,
  )
})

test('should pass arguments to ctx.reply', async () => {
  const reply = vi.fn<Context['reply']>()
  const ctx = {
    reply: reply as Context['reply'],
  } as Context & MarkdownFlavour
  const next = vi.fn()
  const signal = {} as any

  await markdownPlugin()(ctx, next)
  await ctx.replyWithMarkdown(
    'text_test',
    { reply_markup: { keyboard: [] } },
    signal,
  )

  expect(reply).toHaveBeenCalledWith(
    'text\\_test',
    { parse_mode: 'MarkdownV2', reply_markup: { keyboard: [] } },
    signal,
  )
})
