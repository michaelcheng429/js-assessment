exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        index = i;
      }
    }

    return index;
  },

  sum: function(arr) {
    return arr.reduce((result, item) => {
      result += item;
      return result;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(value => value !== item);
  },

  removeWithoutCopy: function(arr, item) {
    // const result = [];

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] !== item) {
    //     result.push(arr[i]);
    //   }
    // }

    // return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j] && duplicates.indexOf(arr[i]) === -1) {
          duplicates.push(arr[i]);
        }
      }
    }

    return duplicates;
  },

  square: function(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }

    return arr;
  },

  findAllOccurrences: function(arr, target) {
    const occurrences = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }

    return occurrences;
  }
};
