# next-ant-fields-value
> Set fields value for ant design based on next.

## installation
```bash
npm install -S @feizheng/next-ant-fields-value
```

## usage
```js
import '@feizheng/next-ant-fields-value';

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
