import { module, test } from 'qunit';
import { setupRenderingTest } from 'tic-tac-toe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | winner-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<WinnerModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <WinnerModal>
        template block text
      </WinnerModal>
    `);

    assert.dom().hasText('template block text');
  });
});
