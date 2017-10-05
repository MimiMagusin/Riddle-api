// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const randomRiddle = require('./randomRiddle');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createGame (hook) {
    return randomRiddle(hook)
      .then((riddle) => {

        hook.data = {
          title: `${hook.params.user.name}'s Game`,
        };
        hook.data.players = [{
          userId: hook.params.user._id,
          riddle: riddle,
          question: riddle.question
        }];
        return Promise.resolve(hook);
      });
  };
};
