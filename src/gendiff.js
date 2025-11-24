import { readFile } from './parse.js';
import { compareData } from './compare.js';
import { formatResult } from './formatters/index.js';

export const generateDifferences = (filepath1, filepath2, options = {}) => {
  if (!filepath1 || !filepath2) {
    return '';
  }

  const obj1 = readFile(filepath1);

  const obj2 = readFile(filepath2);

  const result = compareData(obj1, obj2);

  return formatResult(result, options.format);
};
