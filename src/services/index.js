const users = require('./users/users.service.js');
const games = require('./games/games.service.js');
const riddles = require('./riddles/riddles.service.js');
const guess = require('./guess/guess.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(games);
  app.configure(riddles);
  app.configure(guess);
};
