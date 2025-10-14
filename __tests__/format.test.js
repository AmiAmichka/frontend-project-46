import { comparedDataResult, stylishResult } from '../__fixtures__/results.js';
import { formatToStylish } from '../src/format.js';

test('formats files to stylish correctly', () => {
  expect(formatToStylish(comparedDataResult)).toBe(stylishResult);
});
