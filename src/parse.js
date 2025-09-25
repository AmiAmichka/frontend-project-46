import { load } from 'js-yaml';
import { readFileSync } from 'node:fs';
import path from 'node:path';

export const readFiles = (filepath1, filepath2) => {
  const file1 = readFileSync(filepath1, { encoding: 'utf-8' });
  const file2 = readFileSync(filepath2, { encoding: 'utf-8' });

  const parsedFile1 = load(file1, { json: path.extname(filepath1) === '.json' });
  const parsedFile2 = load(file2, { json: path.extname(filepath2) === '.json' });

  return [parsedFile1, parsedFile2];
};
