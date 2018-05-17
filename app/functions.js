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
    const result = [];

    function execute(value) {
      return function() { return fn(value); }
    }

    arr.forEach(item => result.push(execute(item)));

    return result;
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
    fn.apply(null, Array.from(arguments).slice(1, arguments.length));
  },

  partialUsingArguments: function(fn) {
    const args = Array.from(arguments).slice(1, arguments.length);

    return function() {
      const allArgs = args.concat(Array.from(arguments));

      return fn.apply(null, allArgs);
    };
  },

  curryIt: function(fn) {
    function applyArguments(func, args) {
      return func.apply(null, args);
    }

    function getArguments(argumentsSoFar, totalArguments) {
      return function(currentArgument) {
        argumentsSoFar.push(currentArgument);

        if (argumentsSoFar.length === totalArguments) {
          return applyArguments(fn, argumentsSoFar);
        }

        return getArguments(argumentsSoFar, totalArguments);
      };
    }

    return getArguments([], fn.length);
  }
};
