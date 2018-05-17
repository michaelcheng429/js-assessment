exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let count = 0;
    let result = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
        count++;

        if (count < amount) {
          result += str[i];
        }
      } else {
        count = 0;
        result += str[i];
      } 
    }
    
    return result;
  },

  wordWrap: function(str, cols) {
    let answer = '';
    let array = [];

    array = str.split(' ');

    answer = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > cols) {
            answer += '\n' + array[i];
        } else {
            if (answer.length + array[i].length > cols) {
                answer += '\n' + array[i];
            } else {
                answer += ' ' + array[i];
            }
        }
    }

    return answer;
  },

  reverseString: function(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
  }
};
