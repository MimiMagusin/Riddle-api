const { authenticate } = require('feathers-authentication').hooks;
const populate = require('feathers-hooks-common');
const createGame = require('../../hooks/create-game');
const joinGame = require('../../hooks/join-game');

const playersSchema = {
  include: {
    service: 'users',
    nameAs: 'players',
    parentField: 'playerIds',
    childField: '_id'
  }
};

const isJoinable = require('../../hooks/is-joinable');



module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [joinGame()],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({ schema: playersSchema }), isJoinable()],
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
