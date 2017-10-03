// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const RIDDLES = require ('../seeds');


function newRiddle() {
  return RIDDLES[Math.floor(Math.random() * RIDDLES.length)];
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createGame (hook) {
    hook.data = {
      title: `${hook.params.user.name}'s Game`,
      riddle: newRiddle(),
      playerIds: [hook.params.user._id]
    };

    return Promise.resolve(hook);
  };
};
