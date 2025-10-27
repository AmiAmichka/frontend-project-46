import { isObject } from './compare.js';

const makeSpaces = (counter) => {
  let spaces = '';

  for (let i = 0; i <= counter * 4 - 2; i += 1) {
    spaces += ' ';
  }
  return spaces;
};

const formatObjectToStylish = (object, counter) => {
  let result = '{\n';
  const spaces = makeSpaces(counter);

  Object.entries(object).forEach(([key, value]) => {
    result += `${spaces}  ${key}: ${isObject(value) ? formatObjectToStylish(value, counter + 1) : value}\n`;
  });

  result += `${makeSpaces(counter - 1)}  }`;

  return result;
};

export const formatToStylish = (data, counter = 1) => {
  let result = '{\n';
  const spaces = makeSpaces(counter);

  data.forEach(({ key, type, oldValue, newValue, childrenResult }) => {
    if (type === 'nested') {
      result += `${spaces}  ${key}: ${formatToStylish(
        childrenResult,
        counter + 1,
      )}\n`;
    } else if (type === 'unchanged') {
      result += `${spaces}  ${key}: ${isObject(oldValue) ? formatObjectToStylish(oldValue, counter + 1) : oldValue}\n`;
    } else if (type === 'changed') {
      result += `${spaces}- ${key}: ${isObject(oldValue) ? formatObjectToStylish(oldValue, counter + 1) : oldValue}\n`;
      result += `${spaces}+ ${key}: ${isObject(newValue) ? formatObjectToStylish(newValue, counter + 1) : newValue}\n`;
    } else if (type === 'deleted') {
      result += `${spaces}- ${key}: ${isObject(oldValue) ? formatObjectToStylish(oldValue, counter + 1) : oldValue}\n`;
    } else {
      result += `${spaces}+ ${key}: ${isObject(newValue) ? formatObjectToStylish(newValue, counter + 1) : newValue}\n`;
    }
  });

  result += `${makeSpaces(counter - 1)}  }`;

  return result;
};
