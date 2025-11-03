import { obj1, obj2 } from '../__fixtures__/parsed.js';
import { readFile } from '../src/parse.js';

test('read correct json files', () => {
  expect(readFile('__fixtures__/file1.json')).toStrictEqual(obj1);
  expect(readFile('__fixtures__/file2.json')).toStrictEqual(obj2);
});

test('read correct yaml files', () => {
  expect(readFile('__fixtures__/file1.yaml')).toStrictEqual(obj1);
  expect(readFile('__fixtures__/file2.yaml')).toStrictEqual(obj2);
});
