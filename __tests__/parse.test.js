import { obj1, obj2 } from '../__fixtures__/results.js';
import { readFiles } from '../src/parse.js';

test('read correct json files', () => {
  expect(readFiles('__fixtures__/file1.json', '__fixtures__/file2.json')).toStrictEqual([obj1, obj2]);
});

test('read correct yaml files', () => {
  expect(readFiles('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toStrictEqual([obj1, obj2]);
});
