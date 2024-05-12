import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { winConditions } from '../../utils/win-conditions';
import { inject as service } from '@ember/service';

export default class TicTacToeComponent extends Component {
  @service gameState;
  @tracked cells;
  currentPlayer = 'X';

  constructor() {
    super(...arguments);
    this.cells = this.gameState.freshBoard;
    this.gameState.on('boardReset', this, this.resetBoard);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.gameState.off('boardReset', this, this.resetBoard);
  }

  @action
  resetBoard() {
    console.log(`this.gameState.freshBoard = ${this.gameState.freshBoard}`);
    console.log(`this.cells = ${this.cells}`);
    this.cells = this.gameState.freshBoard.slice();
  }

  // checks if there is a winner after every cell update
  get hasWinner() {
    for (let combi of winConditions) {
      const [firstInRow, secondInRow, thirdInRow] = combi;
      // console.log(
      //   `before if block: firstInRow: ${firstInRow} = ${this.cells[firstInRow]}`,
      // );
      // console.log(
      //   `before if block: secondInRow: ${secondInRow} = ${this.cells[secondInRow]}`,
      // );
      // console.log(
      //   `before if block: thirdInRow: ${thirdInRow} = ${this.cells[thirdInRow]}`,
      // );
      if (
        this.cells[firstInRow] &&
        this.cells[firstInRow] === this.cells[secondInRow] &&
        this.cells[firstInRow] === this.cells[thirdInRow]
      ) {
        console.log(`this.cells: ${this.cells}`);
        // console.log(`this.cells[firstInRow]: ${this.cells[firstInRow]}`);
        // console.log(`this.cells[secondInRow]: ${this.cells[secondInRow]}`);
        // console.log(`this.cells[thirdInRow]: ${this.cells[thirdInRow]}`);
        return this.cells[firstInRow];
      }
    }
    return null;
  }

  @action
  play(i) {
    // console.log(winConditions);
    // console.log(`Cells before clicking anything: ${this.cells}`);
    if (this.cells[i] === null && !this.gameState.winner) {
      let cellsAfterStart = this.cells.slice();
      cellsAfterStart[i] = this.currentPlayer;
      this.cells = cellsAfterStart;

      const currentWinner = this.hasWinner;
      if (currentWinner) {
        this.gameState.setWinner(currentWinner);
        this.gameState.saveGame(this.winner, this.cells);
      }

      console.log(`cellsAfterStart: ${cellsAfterStart}`);
      console.log(
        `Cell ${i} clicked, ${this.currentPlayer} now owns this cell.`,
      );

      // If there is no winner yet, the game will continue to run
      if (!this.gameState.winner) {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }

      console.log(`Player switched to ${this.currentPlayer}`);

      console.log(`${this.gameState.winner} has won!`);
    }
  }

  // Feel like this function could use a helper? As I'm using it twice anyway
  @action
  restartGame() {
    this.gameState.newGame();
  }
}
