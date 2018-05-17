exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const string = num.toString(2);
    return Number(string[string.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let string = num.toString(2);

    while (string.length < 8) {
      string = '0' + string;
    }

    return string;
  },

  multiply: function(a, b) {
    return (a * 10000 * b * 10000) / (10000 * 10000);
  }
};
