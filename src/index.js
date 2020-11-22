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
