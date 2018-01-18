var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-ant-fields-value');

describe('next/antFieldsValue', function () {

  it('nx.antFieldsValue', function () {
    var obj = {
      username: 'afei',
      password: '1233',
      sex: 'male'
    };

    var result = nx.antFieldsValue( obj );

    assert.equal(result.username.value,'afei' );
    assert.equal(result.password.value,'1233' );
    assert.equal(result.sex.value,'male' );

  });

});
