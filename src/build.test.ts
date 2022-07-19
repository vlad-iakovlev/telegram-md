import { build } from './build';

test('should return formatted value', () => {
  expect(build('foo_bar')).toBe('foo\\_bar');
});
