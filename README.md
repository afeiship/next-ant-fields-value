# next-ant-fields-value
> Set fields value for ant design based on next.


## usage:
```js
var obj = {
  username: 'afei',
  password: '1233',
  sex: 'male'
};

var result = nx.antFieldsValue( obj );

assert.equal(result.username.value,'afei' );
assert.equal(result.password.value,'1233' );
assert.equal(result.sex.value,'male' );
```
