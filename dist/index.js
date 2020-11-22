/*!
 * name: @jswork/next-ant-fields-value
 * description: Set fields value for ant design based on next.
 * homepage: https://github.com/afeiship/next-ant-fields-value
 * version: 1.0.0
 * date: 2020-11-22 17:05:27
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.antFieldsValue = function (inObj) {
    var result = {};
    nx.forIn(inObj, function (key, value) {
      result[key] = { value: value };
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antFieldsValue;
  }
})();
