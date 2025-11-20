import { isObject } from '../compare.js';

const makeSpaces = (counter) => {
  if (counter > 0) {
    return ' '.repeat(counter * 4 - 2);
  }

  return '';
};

const formatObjectToStylish = (object, counter) => {
  let result = '{\n';
  const spaces = makeSpaces(counter);

  Object.entries(object).forEach(([key, value]) => {
    result += `${spaces}  ${key}: ${
      isObject(value) ? formatObjectToStylish(value, counter + 1) : value
    }\n`;
  });

  result += `${makeSpaces(counter - 1)}  }`;

  return result;
};

export const formatToStylish = (data, counter = 1) => {
  let result = '{\n';
  const spaces = makeSpaces(counter);

  data.forEach(({ key, type, oldValue, newValue, childrenResult }) => {
    switch (type) {
      case 'nested':
        result += `${spaces}  ${key}: ${formatToStylish(
          childrenResult,
          counter + 1,
        )}\n`;
        break;
      case 'unchanged':
        result += `${spaces}  ${key}: ${
          isObject(oldValue)
            ? formatObjectToStylish(oldValue, counter + 1)
            : oldValue
        }\n`;
        break;
      case 'changed':
        result += `${spaces}- ${key}: ${
          isObject(oldValue)
            ? formatObjectToStylish(oldValue, counter + 1)
            : oldValue
        }\n`;
        result += `${spaces}+ ${key}: ${
          isObject(newValue)
            ? formatObjectToStylish(newValue, counter + 1)
            : newValue
        }\n`;
        break;
      case 'deleted':
        result += `${spaces}- ${key}: ${
          isObject(oldValue)
            ? formatObjectToStylish(oldValue, counter + 1)
            : oldValue
        }\n`;
        break;
      case 'added':
        result += `${spaces}+ ${key}: ${
          isObject(newValue)
            ? formatObjectToStylish(newValue, counter + 1)
            : newValue
        }\n`;
        break;
      default:
        break;
    }
  });

  result += `${makeSpaces(counter - 1)}${counter === 1 ? '' : '  '}}`;

  return result;
};
