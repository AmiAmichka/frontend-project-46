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

export const comparedDataResult = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
