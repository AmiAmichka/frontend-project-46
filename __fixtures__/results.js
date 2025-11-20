export const comparedDataResult = [
  {
    key: 'common',
    type: 'nested',
    oldValue: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
      setting6: {
        key: 'value',
        doge: {
          wow: '',
        },
      },
    },
    newValue: {
      follow: false,
      setting1: 'Value 1',
      setting3: null,
      setting4: 'blah blah',
      setting5: {
        key5: 'value5',
      },
      setting6: {
        key: 'value',
        ops: 'vops',
        doge: {
          wow: 'so much',
        },
      },
    },
    childrenResult: [
      { key: 'follow', type: 'added', oldValue: null, newValue: false },
      {
        key: 'setting1',
        type: 'unchanged',
        oldValue: 'Value 1',
        newValue: 'Value 1',
        childrenResult: undefined,
      },
      {
        key: 'setting2',
        type: 'deleted',
        oldValue: 200,
        newValue: undefined,
        childrenResult: undefined,
      },
      {
        key: 'setting3',
        type: 'changed',
        oldValue: true,
        newValue: null,
        childrenResult: undefined,
      },
      {
        key: 'setting4',
        type: 'added',
        oldValue: null,
        newValue: 'blah blah',
      },
      {
        key: 'setting5',
        type: 'added',
        oldValue: null,
        newValue: { key5: 'value5' },
      },
      {
        key: 'setting6',
        type: 'nested',
        oldValue: {
          key: 'value',
          doge: {
            wow: '',
          },
        },
        newValue: {
          key: 'value',
          ops: 'vops',
          doge: {
            wow: 'so much',
          },
        },
        childrenResult: [
          {
            key: 'doge',
            type: 'nested',
            oldValue: { wow: '' },
            newValue: { wow: 'so much' },
            childrenResult: [
              {
                key: 'wow',
                type: 'changed',
                oldValue: '',
                newValue: 'so much',
                childrenResult: undefined,
              },
            ],
          },
          {
            key: 'key',
            type: 'unchanged',
            oldValue: 'value',
            newValue: 'value',
            childrenResult: undefined,
          },
          { key: 'ops', type: 'added', oldValue: null, newValue: 'vops' },
        ],
      },
    ],
  },
  {
    key: 'group1',
    type: 'nested',
    oldValue: {
      baz: 'bas',
      foo: 'bar',
      nest: {
        key: 'value',
      },
    },
    newValue: { foo: 'bar', baz: 'bars', nest: 'str' },
    childrenResult: [
      {
        key: 'baz',
        type: 'changed',
        oldValue: 'bas',
        newValue: 'bars',
        childrenResult: undefined,
      },
      {
        key: 'foo',
        type: 'unchanged',
        oldValue: 'bar',
        newValue: 'bar',
        childrenResult: undefined,
      },
      {
        key: 'nest',
        type: 'changed',
        oldValue: { key: 'value' },
        newValue: 'str',
        childrenResult: undefined,
      },
    ],
  },
  {
    key: 'group2',
    type: 'deleted',
    oldValue: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    newValue: undefined,
    childrenResult: undefined,
  },
  {
    key: 'group3',
    type: 'added',
    oldValue: null,
    newValue: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
  },
];

export const stylishResult = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

export const plainResult = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed.
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed.
Property 'group3' was added with value: [complex value]
`;

export const jsonResult = '[{"key":"common","type":"nested","oldValue":{"setting1":"Value 1","setting2":200,"setting3":true,"setting6":{"key":"value","doge":{"wow":""}}},"newValue":{"follow":false,"setting1":"Value 1","setting3":null,"setting4":"blah blah","setting5":{"key5":"value5"},"setting6":{"key":"value","ops":"vops","doge":{"wow":"so much"}}},"childrenResult":[{"key":"follow","type":"added","oldValue":null,"newValue":false},{"key":"setting1","type":"unchanged","oldValue":"Value 1","newValue":"Value 1"},{"key":"setting2","type":"deleted","oldValue":200},{"key":"setting3","type":"changed","oldValue":true,"newValue":null},{"key":"setting4","type":"added","oldValue":null,"newValue":"blah blah"},{"key":"setting5","type":"added","oldValue":null,"newValue":{"key5":"value5"}},{"key":"setting6","type":"nested","oldValue":{"key":"value","doge":{"wow":""}},"newValue":{"key":"value","ops":"vops","doge":{"wow":"so much"}},"childrenResult":[{"key":"doge","type":"nested","oldValue":{"wow":""},"newValue":{"wow":"so much"},"childrenResult":[{"key":"wow","type":"changed","oldValue":"","newValue":"so much"}]},{"key":"key","type":"unchanged","oldValue":"value","newValue":"value"},{"key":"ops","type":"added","oldValue":null,"newValue":"vops"}]}]},{"key":"group1","type":"nested","oldValue":{"baz":"bas","foo":"bar","nest":{"key":"value"}},"newValue":{"foo":"bar","baz":"bars","nest":"str"},"childrenResult":[{"key":"baz","type":"changed","oldValue":"bas","newValue":"bars"},{"key":"foo","type":"unchanged","oldValue":"bar","newValue":"bar"},{"key":"nest","type":"changed","oldValue":{"key":"value"},"newValue":"str"}]},{"key":"group2","type":"deleted","oldValue":{"abc":12345,"deep":{"id":45}}},{"key":"group3","type":"added","oldValue":null,"newValue":{"deep":{"id":{"number":45}},"fee":100500}}]';
