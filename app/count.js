exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let countTimeout;

    function count() {
        console.log(start);
        start++;

        if (start <= end) {
            countTimeout = setTimeout(count, 100);
        }
    }

    count();

    return {
      cancel: () => clearTimeout(countTimeout)
    };
  }
};
