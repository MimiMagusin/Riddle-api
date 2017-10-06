const errors = require('feathers-errors');
const randomRiddle = require('./randomRiddle');

const JOIN_GAME = 'JOIN_GAME';
const START_GAME = 'START_GAME';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function updateGame (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    switch(hook.data.type) {
    case JOIN_GAME :
      return randomRiddle(hook)
        .then((riddle) => {
          hook.data = {
            '$addToSet': {
              'players.userId': hook.params.user._id,
              'playerSymbols': riddle
            }
          };

          return Promise.resolve(hook);
        });
    case START_GAME :
      hook.data = { started: true};
      return hook;

    default :
      throw new errors.NotAcceptable('Dunno what you want, but you are not gonna get it.');
    }
  };
};
