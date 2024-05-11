import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class WinnerModalComponent extends Component {
  @service gameState;
  @service router;

  @action
  closeModal() {
    this.modal = false;
  }

  @action
  goToHistory() {
    this.router.transitionTo('history');
  }

  @action
  restartGame() {
    this.gameState.newGame();
  }
}
