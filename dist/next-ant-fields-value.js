(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.antFieldsValue = function (inObj) {
    var result = {};
    nx.each( inObj, function(key, value){
      result [ key ] = {  value: value };
    });
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.antFieldsValue;
  }

}());
