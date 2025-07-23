import { readFileSync } from 'node:fs';

export const readFiles = (filepath1, filepath2) => {
  const file1 = readFileSync(filepath1, { encoding: 'utf-8' });
  const file2 = readFileSync(filepath2, { encoding: 'utf-8' });

  const parsedFile1 = JSON.parse(file1);
  const parsedFile2 = JSON.parse(file2);

  return [parsedFile1, parsedFile2];
};

export const compareData = (obj1, obj2) => {
  console.log('{');

  Object.keys(obj1).forEach((key) => {
    if (!Object.hasOwn(obj2, key)) {
      console.log(`  - ${key}: ${obj1[key]}`);
    } else if (obj2[key] !== obj1[key]) {
      console.log(`  - ${key}: ${obj1[key]}`);
      console.log(`  + ${key}: ${obj2[key]}`);
    } else if (obj2[key] === obj1[key]) {
      console.log(`    ${key}: ${obj1[key]}`);
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      console.log(`  + ${key}: ${obj2[key]}`);
    }
  });

  console.log('}');
};
