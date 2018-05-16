exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let count = start;

    console.log(start);

    const countInterval = setInterval(() => {
        if (count < end) {
            count++;
        } else {
            clearInterval(countInterval);
        }
    }, 100);

    return {
        cancel: () => clearInterval(countInterval)
    };
  }
};
