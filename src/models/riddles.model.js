// riddles-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const uniqueValidator = require('mongoose-unique-validator');

  const riddles = new mongooseClient.Schema({
    question: { type: String, required: true, unique: true },
    answer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  riddles.plugin(uniqueValidator);
  return mongooseClient.model('riddles', riddles);
};
