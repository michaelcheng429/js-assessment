exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return {
        then: () => value
    };
  },

  manipulateRemoteData: function(url) {
    fetch(url).then(result => {
        console.log(result.json());
    });
  }
};
