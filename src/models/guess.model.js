// Guess-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const RIDDLES = require ('../seeds');

class GuessClass {
  const answer =    // get db
  const guess =     // react
  const points =    // get db

  /*  if (isWinner === true) {
        return "Yay you won"
      else
        checkGuess()
        newRiddle()
        updatePoints()
        isBreakPoint()
        updateWonBy()
      }
  }*/

  checkGuess(answer, guess){
    if (answer === guess) return true;
  }

  newRiddle() {
    return RIDDLES[Math.floor(Math.random() * RIDDLES.length)];
  }

  updatePoints() {
    if (checkGuess(answer, guess) === true) {
      return points + 1
    } else {
      return points + 0
    }
  }

  isBreakPoint() {
    if (points === 5) return true;
  }

  isWinner(){
    if (points === 6) return true;
  }

  updateWonBy() {
    if (checkGuess(answer, guess) === true) {
      wonBy.push(this.playerId)
    }
  }


}




module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const guess = new Schema({
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('guess', guess);
};
