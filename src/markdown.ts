import { _escape } from './_escape.js'

export class Markdown {
  value: string

  constructor(value: unknown = '', escaped = false) {
    this.value = escaped ? String(value) : _escape(String(value))
  }

  add(value: unknown = '', escaped = false) {
    this.value += escaped ? String(value) : _escape(String(value))
  }

  toString() {
    return this.value
  }
}
