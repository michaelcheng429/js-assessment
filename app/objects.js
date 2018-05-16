exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    fn = fn.bind(obj);
    return fn();
  },

  alterObjects: function(constructor, greeting) {
    constructor.greeting = greeting;
  },

  iterate: function(obj) {
    const result = [];

    for (const key in obj) {
        result.push(`${key}: ${obj[key]}`);
    }

    return result;
  }
};
