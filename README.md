# next-ant-fields-value
> Set fields value for ant design based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-ant-fields-value
```

## usage
```js
import '@jswork/next-ant-fields-value';

const obj = {
  username: 'afei',
  password: '1233',
  sex: 'male'
};

const result = nx.antFieldsValue( obj );

// result:
{
  username: { value: 'afei' },
  password: { value: '1233' },
  sex: { value: 'male' }
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-ant-fields-value/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-ant-fields-value
[version-url]: https://npmjs.org/package/@jswork/next-ant-fields-value

[license-image]: https://img.shields.io/npm/l/@jswork/next-ant-fields-value
[license-url]: https://github.com/afeiship/next-ant-fields-value/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-ant-fields-value
[size-url]: https://github.com/afeiship/next-ant-fields-value/blob/master/dist/next-ant-fields-value.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-ant-fields-value
[download-url]: https://www.npmjs.com/package/@jswork/next-ant-fields-value
