# @telegram-md/grammy-plugin

telegram-md plugin for [grammY](https://grammy.dev/)

[![NPM](https://img.shields.io/npm/v/@telegram-md/grammy-plugin)](https://www.npmjs.org/package/@telegram-md/grammy-plugin)

## Table of Contents

1. [How to Install](#how-to-install)
2. [Usage Examples](#usage-examples)

## How to install

```sh
npm install @telegram-md/grammy-plugin
```

## Usage Examples

```ts
import { Bot, Context } from 'grammy';
import { MarkdownFlavour, markdownPlugin } from '@telegram-md/grammy-plugin';
import { md } from 'telegram-md';

(async () => {
  const bot = new Bot<Context & MarkdownFlavour>('<bot-token>');

  bot.use(markdownPlugin());

  bot.command('start', async (ctx) => {
    // Send simple string (all special characters will be escaped)
    await ctx.replyWithMarkdown('Hello, World!');

    // Send Markdown (read more about `md` here: https://www.npmjs.org/package/telegram-md)
    await ctx.replyWithMarkdown(md`Hello, ${md.bold(World)}!`);

    // Options will be passed to ctx.reply
    await ctx.replyWithMarkdown('foo-bar', { reply_markup: { keyboard: [] });
  });
})()
```
