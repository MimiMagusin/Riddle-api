const assert = require('assert');
const app = require('../../src/app');

describe('\'Guess\' service', () => {
  it('registered the service', () => {
    const service = app.service('guess');

    assert.ok(service, 'Registered the service');
  });
});
