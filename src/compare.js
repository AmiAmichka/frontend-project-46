export const compareData = (obj1, obj2) => {
  let result = '{\n';

  Object.keys(obj1).forEach((key) => {
    if (!Object.hasOwn(obj2, key)) {
      result += `  - ${key}: ${obj1[key]}\n`;
    } else if (obj2[key] !== obj1[key]) {
      result += `  - ${key}: ${obj1[key]}\n`;
      result += `  + ${key}: ${obj2[key]}\n`;
    } else if (obj2[key] === obj1[key]) {
      result += `    ${key}: ${obj1[key]}\n`;
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      result += `  + ${key}: ${obj2[key]}\n`;
    }
  });

  result += '}';
  return result;
};
