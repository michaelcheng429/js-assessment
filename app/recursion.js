exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const listOfFiles = [];
    const dirs = [];

    function recursion(dir) {
      var files = dir.files;

      dirs.push(dir.dir);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          recursion(files[i]);
        }
      }

      dirs.pop();
    }

    recursion(data);


    return listOfFiles;
  },

  permute: function(arr) {
    const temporary = [];
    const answer = [];

    function addAnswer() {
      answer.push(temporary.slice());
    }

    function recursion() {
      let item;

      for (let i = 0; i < arr.length; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        temporary.push(item);

        if (arr.length) {
          recursion();
        } else {
          addAnswer();
        }

        arr.splice(i, 0, item);
        temporary.pop();
      }

      return answer;
    }

    return recursion();
  },

  fibonacci: function(n) {
    return n < 2 ? n : this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {
    if (n === 0) {
      return [''];
    }

    const result = [];

    for (let i = 0; i < n; ++i) {
        var lefts = this.validParentheses(i);
        var rights = this.validParentheses(n - i - 1);

        for (let j = 0; j < lefts.length; j++)
            for (let r = 0; r < rights.length; ++r)
                result.push("(" + lefts[j] + ")" + rights[r]);
    }

    return result;
  }
};
