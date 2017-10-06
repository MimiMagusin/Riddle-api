const errors = require('feathers-errors');
const randomRiddle = require('./randomRiddle');

const JOIN_GAME = 'JOIN_GAME';
const START_GAME = 'START_GAME';
const GUESS = 'GUESS';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars

  return function updateGame (hook) {
    const sum = hook.data.points;
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    switch(hook.data.type) {
    case JOIN_GAME :
      return randomRiddle(hook)
        .then((riddle) => {
          const newPlayer = {
            userId: hook.params.user._id,
            riddle: riddle._id,
            question: riddle.question
          };

          hook.data = {
            '$addToSet': {
              'players': newPlayer
            }
          };

          return Promise.resolve(hook);
        });
        case GUESS : {
                  // if (!game.hasJoined(user)) {
                  //   throw new errors.Forbidden('You are not a player in this game, sorry!');
                  // }
                  //const guessRight = game.checkGuess(user, payload);

                  // hook.data = {
                  //   guesses: game.guesses.concat(payload),
                  // };
                  //
                  // if (!guessRight) {
                  //   hook.data.currentPlayerIndex = game.nextPlayerIndex();
                  // }

                  hook.data = { players: [0] };
{ points: sum + 1}
                  return hook;
                }


  case START_GAME :
    hook.data = { started: true};
    return hook;

    default :
    throw new errors.NotAcceptable('Dunno what you want, but you are not gonna get it.');
    }
  };


};
