import generateDifferences from '../index.js';

test('generate differences', () => {
  expect(generateDifferences('__fixtures__/file1.json', '__fixtures__/file2.json'));
});
