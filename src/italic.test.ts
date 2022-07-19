import { italic } from './italic';

test('should return empty string', () => {
  expect(italic('').value).toBe('');
});

test('should return formatted value', () => {
  expect(italic('foo_bar').value).toBe('_foo\\_bar_');
});
