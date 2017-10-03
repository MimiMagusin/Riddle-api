const assert = require('assert');
const app = require('../../src/app');

describe('\'riddles\' service', () => {
  it('registered the service', () => {
    const service = app.service('riddles');

    assert.ok(service, 'Registered the service');
  });
});
