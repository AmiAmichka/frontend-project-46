const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

export const formatToPlain = (data, path = '') => {
  let result = '';

  data.forEach(({ key, type, oldValue, newValue, childrenResult }) => {
    const finalPath = `${path}${key}`;
    if (type === 'nested') {
      result += formatToPlain(childrenResult, `${finalPath}.`);
    } else if (type === 'added') {
      result += `Property '${finalPath}' was added with value: ${stringify(newValue)}\n`;
    } else if (type === 'changed') {
      result += `Property '${finalPath}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}\n`;
    } else if (type === 'deleted') {
      result += `Property '${finalPath}' was removed.\n`;
    }
  });

  return result;
};
