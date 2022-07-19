import { bold } from './bold';
import { italic } from './italic';
import { join } from './join';

test('should join without separator', () => {
  expect(join(['foo_bar', bold('wow'), italic('ttt')]).value).toBe('foo\\_bar*wow*_ttt_');
});

test('should join with separator', () => {
  expect(join(['foo_bar', bold('wow'), italic('ttt')], ' y_o_l_o ').value).toBe('foo\\_bar y\\_o\\_l\\_o *wow* y\\_o\\_l\\_o _ttt_');
});
