import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GameStateService extends Service {
  @tracked winner = null;
  @tracked freshBoard = Array(9).fill(null);
  @tracked previousGames = [];

  saveGame(winner, cells) {
    const game = {
      winner,
      cells,
      timeOfGame: new Date().toLocaleString(),
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
  }
}
