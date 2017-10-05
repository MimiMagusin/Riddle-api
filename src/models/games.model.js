// games-model.js - A mongoose model
const GameClass = require('./games.class');
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const riddleSchema = new mongooseClient.Schema({
    riddle: { type: mongooseClient.Schema.Types.ObjectId, ref: 'riddles' },
    question: { type: String },
    wonBy: [ { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' } ],
  });

  const playerSchema = new mongooseClient.Schema({
    userId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    points: { type: Number },
  });

  const games = new mongooseClient.Schema({
    title: { type: String, required: true },
    winnerId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    started: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    riddles: [ riddleSchema ],
    players: [ playerSchema ],
  });
  games.loadClass(GameClass);
  return mongooseClient.model('games', games);
};
