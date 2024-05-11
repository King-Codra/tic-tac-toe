import { module, test } from 'qunit';
import { setupRenderingTest } from 'tic-tac-toe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | past-games/past-games', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PastGames::PastGames />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PastGames::PastGames>
        template block text
      </PastGames::PastGames>
    `);

    assert.dom().hasText('template block text');
  });
});
