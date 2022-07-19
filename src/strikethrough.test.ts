import { strikethrough } from './strikethrough';

test('should return empty string', () => {
  expect(strikethrough('').value).toBe('');
});

test('should return formatted value', () => {
  expect(strikethrough('foo_bar').value).toBe('~foo\\_bar~');
});
