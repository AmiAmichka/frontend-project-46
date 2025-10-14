export const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

export const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

export const comparedDataResult = [
  {
    key: 'host',
    type: 'unchanged',
    oldValue: 'hexlet.io',
    newValue: 'hexlet.io',
  },
  { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
  {
    key: 'proxy',
    type: 'deleted',
    oldValue: '123.234.53.22',
    newValue: undefined,
  },
  {
    key: 'follow',
    type: 'deleted',
    oldValue: false,
    newValue: undefined,
  },
  { key: 'verbose', type: 'added', oldValue: null, newValue: true },
];

export const stylishResult = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
