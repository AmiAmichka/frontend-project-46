export const compareData = (obj1, obj2) => {
  const result = [];

  Object.keys(obj1).forEach((key) => {
    let type = 'unchanged';

    if (!Object.hasOwn(obj2, key)) {
      type = 'deleted';
    } else if (obj2[key] !== obj1[key]) {
      type = 'changed';
    }

    result.push({
      key,
      type,
      oldValue: obj1[key],
      newValue: obj2[key],
    });
  });

  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      result.push({
        key,
        type: 'added',
        oldValue: null,
        newValue: obj2[key],
      });
    }
  });

  return result;
};
