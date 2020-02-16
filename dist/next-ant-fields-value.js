/*!
 * name: @feizheng/next-ant-fields-value
 * description: Set fields value for ant design based on next.
 * url: https://github.com/afeiship/next-ant-fields-value
 * version: 1.0.0
 * date: 2020-02-16 23:32:25
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.antFieldsValue = function(inObj) {
    var result = {};
    nx.forIn(inObj, function(key, value) {
      result[key] = { value: value };
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antFieldsValue;
  }
})();

//# sourceMappingURL=next-ant-fields-value.js.map
