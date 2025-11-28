import { formatToJson } from './json.js';
import { formatToPlain } from './plain.js';
import { formatToStylish } from './stylish.js';

export const formatResult = (result, format = 'stylish') => {
  let finalResult = '';

  switch (format) {
    case 'stylish':
      finalResult = formatToStylish(result);
      break;
    case 'plain':
      finalResult = formatToPlain(result);
      finalResult = finalResult.slice(0, finalResult.length - 1);
      break;
    case 'json':
      finalResult = formatToJson(result);
      break;
    default:
      console.log(`Формат ${format} не поддерживается. Программа отформатирует в stylish.`);
      finalResult = formatToStylish(result);
  }

  return finalResult;
};
