// const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function joinGame (hook) {
    const { user } = hook.params;

    hook.app.service('games').get(hook.id)
      .then((game) => {
        if (game.started === true) {
          // this hook now gets called with every game update, it should not
          // throw an error. This might change later
          // throw new errors.Forbidden('This game has already started!');
          return Promise.resolve(hook);
        }

        const { players } = game;
        const joined = players.map((p) => (p.userId)).includes(user._id);

        hook.data = {};

        if (!joined) {
          hook.data = {
            players: players.concat({ userId: user._id })
          };
        }

        return Promise.resolve(hook);
      });

  };
};
