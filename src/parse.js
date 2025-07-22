import { readFileSync } from 'node:fs';

export const readFiles = (filepath1, filepath2) => {
  const file1 = readFileSync(filepath1, { encoding: 'utf-8' });
  const file2 = readFileSync(filepath2, { encoding: 'utf-8' });
  console.log(file1, file2);
};
