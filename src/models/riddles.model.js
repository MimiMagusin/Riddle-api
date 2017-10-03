module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const riddles = new mongooseClient.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
  });

  return mongooseClient.model('riddles', riddles);
};
