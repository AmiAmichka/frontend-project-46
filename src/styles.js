export const formatToStylish = (data) => {
  let result = '{\n';

  data.forEach(({ key, type, oldValue, newValue }) => {
    if (type === 'unchanged') {
      result += `    ${key}: ${oldValue}\n`;
    } else if (type === 'changed') {
      result += `  - ${key}: ${oldValue}\n`;
      result += `  + ${key}: ${newValue}\n`;
    } else if (type === 'deleted') {
      result += `  - ${key}: ${oldValue}\n`;
    } else if (type === 'added') {
      result += `  + ${key}: ${newValue}\n`;
    }
  });

  result += '}';

  return result;
};
