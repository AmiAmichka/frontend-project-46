import { comparedDataResult, jsonResult, plainResult, stylishResult } from '../__fixtures__/results.js'
import { formatResult } from '../src/formatters/index.js'

test('formats files to stylish correctly', () => {
  expect(formatResult(comparedDataResult)).toBe(stylishResult)
})

test('formats files to plain correctly', () => {
  expect(formatResult(comparedDataResult, 'plain')).toBe(plainResult)
})

test('formats files to json correctly', () => {
  expect(formatResult(comparedDataResult, 'json')).toBe(jsonResult)
})

test('formats files to stylish correctly with unsuitable format', () => {
  expect(formatResult(comparedDataResult, 'word')).toBe(stylishResult)
})
