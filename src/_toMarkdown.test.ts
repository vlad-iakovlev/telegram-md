import { toMarkdown } from './_toMarkdown';

test('should save escaped text', () => {
  expect(toMarkdown('foo_bar').value).toBe('foo\\_bar');
});

test('should save number', () => {
  expect(toMarkdown(123.456).value).toBe('123\\.456');
});

test('should save unescaped text', () => {
  expect(toMarkdown('foo_bar', true).value).toBe('foo_bar');
});

test('should pass Markdown class as-is', () => {
  const escaped = toMarkdown();
  escaped.value = 'foo_bar';
  expect(toMarkdown(escaped)).toBe(escaped);
});

test('String should cast to value', () => {
  expect(String(toMarkdown('foo_bar'))).toBe('foo\\_bar');
});
