import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlayRoute extends Route {
  @service gameState;

  deactivate() {
    this.gameState.newGame();
  }
}
