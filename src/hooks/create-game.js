// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const WORDS = ['abruptly', 'absurd', 'banjo', 'jazzy', 'wave', 'whiskey', 'doll', 'essential', 'donkey', 'weather', 'cupboard', 'arrange', 'table', 'rhyme', 'hurry'];

function newWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createGame (hook) {
    hook.data = {
      title: `${hook.params.user.name}'s Game`,
      word: newWord(),
      playerIds: [hook.params.user._id]
    };

    return Promise.resolve(hook);
  };
};
