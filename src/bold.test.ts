import { bold } from './bold';

test('should return empty string', () => {
  expect(bold('').value).toBe('');
});

test('should return formatted value', () => {
  expect(bold('foo_bar').value).toBe('*foo\\_bar*');
});
