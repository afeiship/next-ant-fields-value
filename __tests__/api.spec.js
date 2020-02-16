const nx = require('@feizheng/next-js-core2');
require('../src/next-ant-fields-value');

describe('api.basic test', () => {
  test('nx.antFieldsValue', function() {
    var obj = {
      username: 'afei',
      password: '1233',
      sex: 'male'
    };

    var result = nx.antFieldsValue(obj);

    expect(result.username.value).toBe('afei');
    expect(result.password.value).toBe('1233');
    expect(result.sex.value).toBe('male');
  });
});
