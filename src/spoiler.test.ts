import { spoiler } from './spoiler';

test('should return empty string', () => {
  expect(spoiler('').value).toBe('');
});

test('should return formatted value', () => {
  expect(spoiler('foo_bar').value).toBe('||foo\\_bar||');
});
