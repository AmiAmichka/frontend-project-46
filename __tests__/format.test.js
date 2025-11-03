import { comparedDataResult, plainResult, stylishResult } from '../__fixtures__/results.js';
import { formatResult } from '../src/formatters/index.js';

test('formats files to stylish correctly', () => {
  expect(formatResult(comparedDataResult)).toBe(stylishResult);
});

test('formats files to plain correctly', () => {
  expect(formatResult(comparedDataResult, 'plain')).toBe(plainResult);
});
