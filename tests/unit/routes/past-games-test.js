import { module, test } from 'qunit';
import { setupTest } from 'tic-tac-toe/tests/helpers';

module('Unit | Route | past-games', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:past-games');
    assert.ok(route);
  });
});
