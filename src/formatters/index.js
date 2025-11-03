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
      break;
    case 'json':
      finalResult = 'такого вывода пока нет';
      break;
    default:
      console.log(`Формат ${format} не поддерживается. Программа отформатирует в stylish.`);
      finalResult = formatToStylish(result);
  }

  console.log(finalResult);

  return finalResult;
};
