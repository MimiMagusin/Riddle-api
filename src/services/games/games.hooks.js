const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const createGame = require('../../hooks/create-game');
const joinGame = require('../../hooks/join-game');
const guess = require('../../hooks/guess');

const playersSchema = {
  include: {
    service: 'users',
    nameAs: 'players',
    parentField: 'playerIds',
    childField: '_id'
  }
};


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [joinGame()],
    patch: [joinGame()],
    remove: []
  },

  after: {
    all: [
      commonHooks.populate({ schema: playersSchema }),  // why does this get called after, and not before?
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('riddle')
      )
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
