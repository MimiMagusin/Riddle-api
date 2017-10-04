// games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

class GameClass {
  // hasTurn(user) {
  //   return !!user; // TODO
  // }
  //
  // checkGuess(user, guess) {
  //   return !!user && !!guess; // TODO
  // }
  //
  // nextPlayerIndex() {
  //   return 1; // TODO
  // }
  //
  // isNotJoinableBy(user) {
  //   return !this.isJoinableBy(user);
  // }
  //
  // isJoinableBy(user) {
  //   return this.isJoinable() && !this.hasJoined(user);
  // }
  //
  // hasJoined(user) {
  //   this.playerIds.includes(user._id);
  // }
  //
  // isJoinable() {
  //   return !this.isFull() && !this.isStarted();
  // }
  //
  // isFull() {
  //   return this.playerIds.length >= 2;
  // }
  //
  // isStarted() {
  //   return this.guesses.length > 0;
  // }
 }

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const riddleSchema = new mongooseClient.Schema({
    riddle: { type: mongooseClient.Schema.Types.ObjectId, ref: 'riddles' },
    wonBy: [ { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' } ],
  });

  const playerSchema = new mongooseClient.Schema({
    userId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    points: { type: Number },
  });

  const games = new mongooseClient.Schema({
    title: { type: String, required: true },
    winnerId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    started: { type: Boolean },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    riddles: [ riddleSchema ],
    players: [ playerSchema ],
  });

  return mongooseClient.model('games', games);
};
