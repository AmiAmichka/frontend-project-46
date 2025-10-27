import { comparedDataResult } from '../__fixtures__/results.js';
import { compareData } from '../src/compare.js';
import { obj1, obj2 } from '../__fixtures__/parsed.js';

test('compares files correctly', () => {
  expect(compareData(obj1, obj2)).toStrictEqual(comparedDataResult);
});
