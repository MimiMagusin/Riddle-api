// Initializes the `Guess` service on path `/guess`
const createService = require('feathers-mongoose');
const createModel = require('../../models/guess.model');
const hooks = require('./guess.hooks');
const filters = require('./guess.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'guess',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/guess', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('guess');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
