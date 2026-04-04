import { expect, test } from 'vitest'
import { bold } from './bold.js'
import { italic } from './italic.js'
import { join } from './join.js'

test('should join without separator', () => {
  expect(join(['foo_bar', bold('wow'), italic('ttt')]).value).toBe(
    'foo\\_bar*wow*_ttt_',
  )
})

test('should join with separator', () => {
  expect(join(['foo_bar', bold('wow'), italic('ttt')], ' y_o_l_o ').value).toBe(
    'foo\\_bar y\\_o\\_l\\_o *wow* y\\_o\\_l\\_o _ttt_',
  )
})
