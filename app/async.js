exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return {
        then: callback => {
          setTimeout(() => {
            callback(value);
          }, 1);
        }
    };
  },

  manipulateRemoteData: function(url) {
    return fetch(url).then(result => result.json()).then(json => {
      return json.people
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(item => item.name);
    });
  }
};
