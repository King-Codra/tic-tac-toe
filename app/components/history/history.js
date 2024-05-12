import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HistoryComponent extends Component {
  @service gameState;

  @action
  deleteGame(i) {
    // Can't get this to work (yet). Tooltip on hover in place to inform user
    console.log('Button clicked!');
    let gameElements = document.querySelectorAll('.history-game-entry');
    let gameElement = gameElements[i];
    gameElement.classList.add('fade-out');

    // Timeout only necessary for the transition change. Keeping it here for later.
    setTimeout(() => {
      this.gameState.deleteGame(i);
      this.args.onDelete();
    }, 500);
  }
}
