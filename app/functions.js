exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    fn = fn.bind(obj);
    return fn();
  },

  functionFunction: function(str) {
    return str1 => {
      return str + ', ' + str1;
    };
  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  },

  useArguments: function() {
    return Array.from(arguments).reduce((result, number) => {
      result += number;
      return result;
    }, 0);
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
