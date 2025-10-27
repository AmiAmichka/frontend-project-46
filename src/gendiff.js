import process from 'node:process';
import path from 'node:path';
import { readFiles } from './parse.js';
import { compareData } from './compare.js';
import { formatToStylish } from './format.js';

export const generateDifferences = (filepath1, filepath2) => {
  const [obj1, obj2] = readFiles(
    path.resolve(process.cwd(), filepath1),
    path.resolve(process.cwd(), filepath2),
  );

  const result = compareData(obj1, obj2);
  console.log(formatToStylish(result));
};
