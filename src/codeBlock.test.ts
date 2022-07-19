import { codeBlock } from './codeBlock';

test('should return empty string', () => {
  expect(codeBlock('').value).toBe('');
});

test('should return code block without language', () => {
  expect(codeBlock('foo_bar').value).toBe('```\nfoo\\_bar\n```');
});

test('should return code block with language', () => {
  expect(codeBlock('foo_bar', 'python').value).toBe('```python\nfoo\\_bar\n```');
});
