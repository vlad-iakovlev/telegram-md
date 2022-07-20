# telegram-md

Telegram MarkdownV2 formatter

![GitHub CI](https://img.shields.io/github/workflow/status/vlad-yakovlev/telegram-md/CI/main?label=github-ci)
[![Codecov](https://img.shields.io/codecov/c/github/vlad-yakovlev/telegram-md/main)](https://codecov.io/gh/vlad-yakovlev/telegram-md)
[![NPM](https://img.shields.io/npm/v/telegram-md)](https://www.npmjs.org/package/telegram-md)
![Dependencies](https://img.shields.io/librariesio/release/npm/telegram-md)

## How to install

```sh
npm install telegram-md
```

## How to use

```ts
import { md } from 'telegram-md'

const message = md`Hello, ${md.bold('World')}!`

ctx.reply(md.build(message))
```

## Classes

### Markdown

Stores the result of executing md methods. Used to differentiate between normal strings and escaped strings.

## Methods

Every method escapes all unescaped input. Input is assumed to be escaped only when it's an instance of Markdown.

### md

Template tag which can be used to build markdown formatted messages. Returns `Markdown`.

```ts
md`Hello, ${md.bold('World')}!` // => 'Hello, *World*\\!'
```

### md.build

Returns message text that cat be safely sent to telegram API.

```ts
md.build(md`Hello, ${md.bold('World')}!`) // => 'Hello, *World*\\!'
md.build('Hello, World!') // => 'Hello, World\\!'
```

### md.bold

```ts
md.bold('bold *text') // => '*bold \*text*'
```

### md.italic

```ts
md.italic('italic *text') // => '_italic \*text_'
```

### md.underline

```ts
md.underline('underline') // => '__underline__'
```

### md.strikethrough

```ts
md.strikethrough('strikethrough') // => '~strikethrough~'
```

### md.spoiler

```ts
md.spoiler('spoiler') // => '||spoiler||'
```

### md.link

```ts
md.link('inline URL', 'http://www.example.com/') // => '[inline URL](http://www\\.example\\.com/)'
md.link('inline mention of a user', 'tg://user?id=123456789') // => '[inline mention of a user](tg://user?id\\=123456789)'
```

### md.inlineCode

```ts
md.inlineCode('inline fixed-width code') // => '`inline fixed\\-width code`'
```

### md.codeBlock

````ts
md.code('pre-formatted fixed-width code block') // =>
```
pre\\-formatted fixed\\-width code block
```
````

````ts
md.code('pre-formatted fixed-width code block written in the Python', 'python') // =>
```python
pre\\-formatted fixed\\-width code block written in the Python
```
````
