import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Evented from '@ember/object/evented';

export default class GameStateService extends Service.extend(Evented) {
  @tracked winner = null;
  @tracked freshBoard = Array(9).fill(null);
  @tracked previousGames = [];

  // Without this constructor, LocalStorage will sometimes get reset when the user comes back to the Play route through unexpected navigation. The following code ensures the previousGames array will always first check Local Storage and build from there, unless there is no game in LS
  constructor() {
    super(...arguments);
    this.loadPreviousGames();
  }

  loadPreviousGames() {
    const games = localStorage.getItem('pastGames');
    this.previousGames = games ? JSON.parse(games) : [];
  }

  saveGame(winner, cells) {
    const game = {
      winner: this.winner,
      cells,
      playedAt: new Date().toLocaleString(),
    };
    // push had the wrong sort for the history page. quick&dirty fix
    this.previousGames.unshift(game);

    if (game)
      localStorage.setItem('pastGames', JSON.stringify(this.previousGames));
  }

  deleteGame(i) {
    let updatedGames = this.previousGames.filter((_, index) => index !== i);
    this.previousGames = updatedGames;
    this.refreshLocalStorage();
  }

  refreshLocalStorage() {
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
