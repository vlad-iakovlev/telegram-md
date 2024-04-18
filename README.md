# telegram-md

Telegram MarkdownV2 formatter

![GitHub CI](https://img.shields.io/github/actions/workflow/status/vlad-yakovlev/telegram-md/ci.yml?branch=main&label=github-ci)
[![Codecov](https://img.shields.io/codecov/c/github/vlad-yakovlev/telegram-md/main)](https://codecov.io/gh/vlad-yakovlev/telegram-md)
[![NPM](https://img.shields.io/npm/v/@vlad-yakovlev/telegram-md)](https://www.npmjs.org/package/@vlad-yakovlev/telegram-md)

`telegram-md` is a powerful TypesScript library designed to simplify the formatting of text messages in Telegram MarkdownV2 format. It provides a range of methods for applying markdown formatting, such as bold, italic, and links, making it easier to create richly formatted messages programmatically.

## Table of Contents

1. [How to Install](#how-to-install)
2. [Usage Examples](#usage-examples)
3. [API Documentation](#api-documentation)

## How to install

```sh
npm install @vlad-yakovlev/telegram-md
```

## Usage Examples

```ts
import { md } from '@vlad-yakovlev/telegram-md'

// Simple message formatting
const message = md`Hello, ${md.bold('World')}!`
api.sendMessage(chatId, md.build(message))

// Using different formatting styles
const complexMessage = md`
  This is an ${md.italic('italic')}
  and ${md.bold('bold')} text
  with a ${md.link('link', 'http://example.com')}!
`
api.sendMessage(chatId, md.build(complexMessage))
```

## API Documentation

Every method escapes all unescaped input. Input is assumed to be escaped only when it's an instance of Markdown.

### Markdown

Stores the result of executing md methods. Used to differentiate between normal strings and escaped strings.

### md

Template tag which can be used to build markdown formatted messages.

```ts
md`Hello, ${md.bold('World')}!` // => Markdown with value 'Hello, *World*\\!'
```

### md.build

Returns message text that cat be safely sent to telegram API.

```ts
md.build(md`Hello, ${md.bold('World')}!`) // => 'Hello, *World*\\!'
md.build('Hello, World!') // => 'Hello, World\\!'
```

### md.bold

```ts
md.bold('bold *text') // => Markdown with value '*bold \*text*'
```

### md.italic

```ts
md.italic('italic *text') // => Markdown with value '_italic \*text_'
```

### md.underline

```ts
md.underline('underline') // => Markdown with value '__underline__'
```

### md.strikethrough

```ts
md.strikethrough('strikethrough') // => Markdown with value '~strikethrough~'
```

### md.spoiler

```ts
md.spoiler('spoiler') // => Markdown with value '||spoiler||'
```

### md.link

```ts
md.link('inline URL', 'http://www.example.com/') // => Markdown with value '[inline URL](http://www\\.example\\.com/)'
md.link('inline mention of a user', 'tg://user?id=123456789') // => Markdown with value '[inline mention of a user](tg://user?id\\=123456789)'
```

### md.inlineCode

```ts
md.inlineCode('inline fixed-width code') // => Markdown with value '`inline fixed\\-width code`'
```

### md.blockquote

```ts
md.blockquote('blockquote') // => Markdown with value '>blockquote'
```

### md.codeBlock

````ts
md.code(
  'pre-formatted fixed-width code block',
) // => Markdown with value
```
pre\\-formatted fixed\\-width code block
```
````

````ts
md.code(
  'pre-formatted fixed-width code block written in the Python',
  'python',
) // => Markdown with value
```python
pre\\-formatted fixed\\-width code block written in the Python
```
````
