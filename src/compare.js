export const isObject = (object) => typeof object === 'object' && !Array.isArray(object) && object !== null;

export const compareData = (obj1, obj2) => {
  const result = [];

  Object.keys(obj1).forEach((key) => {
    let type = 'unchanged';
    let childrenResult;

    if (!Object.hasOwn(obj2, key)) {
      type = 'deleted';
    } else if (obj2[key] !== obj1[key]) {
      type = 'changed';
      if (isObject(obj1[key]) && isObject(obj2[key])) {
        childrenResult = compareData(obj1[key], obj2[key]);

        type = 'nested';
      }
    }

    result.push({
      key,
      type,
      oldValue: obj1[key],
      newValue: obj2[key],
      childrenResult,
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
