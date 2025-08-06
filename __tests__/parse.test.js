import { readFiles } from '../src/parse.js';

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('read correct files', () => {
  expect(readFiles('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe([obj1, obj2]);
});
