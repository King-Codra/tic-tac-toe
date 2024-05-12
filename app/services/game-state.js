import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Evented from '@ember/object/evented';

export default class GameStateService extends Service.extend(Evented) {
  @tracked winner = null;
  @tracked freshBoard = Array(9).fill(null);
  @tracked previousGames = [];

  saveGame(winner, cells) {
    const game = {
      winner: this.winner,
      cells: cells,
      playedAt: new Date().toLocaleString(),
    };
    this.previousGames.push(game);
    localStorage.setItem('pastGames', JSON.stringify(this.previousGames));
  }

  setWinner(winner) {
    this.winner = winner;
  }

  newGame() {
    this.winner = null;
    this.freshBoard = Array(9).fill(null);
    this.trigger('boardReset');
  }
}
