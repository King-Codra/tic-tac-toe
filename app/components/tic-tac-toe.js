import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default class TicTacToeComponent extends Component {
  @tracked cells = Array(9).fill(null);
  @tracked winner = null;
  currentPlayer = 'X';

  // checks if there is a winner after every cell update
  get hasWinner() {
    for (let combi of winConditions) {
      const [firstInRow, secondInRow, thirdInRow] = combi;
      console.log(
        `before if block: firstInRow: ${firstInRow} = ${this.cells[firstInRow]}`,
      );
      console.log(
        `before if block: secondInRow: ${secondInRow} = ${this.cells[secondInRow]}`,
      );
      console.log(
        `before if block: thirdInRow: ${thirdInRow} = ${this.cells[thirdInRow]}`,
      );
      if (
        this.cells[firstInRow] &&
        this.cells[firstInRow] === this.cells[secondInRow] &&
        this.cells[firstInRow] === this.cells[thirdInRow]
      ) {
        console.log(`this.cells: ${this.cells}`);
        console.log(`this.cells[firstInRow]: ${this.cells[firstInRow]}`);
        console.log(`this.cells[secondInRow]: ${this.cells[secondInRow]}`);
        console.log(`this.cells[thirdInRow]: ${this.cells[thirdInRow]}`);
        return this.cells[firstInRow];
      }
    }
    return null;
  }

  @action
  play(i) {
    console.log(winConditions);
    console.log(`Cells before clicking anything: ${this.cells}`);
    if (this.cells[i] === null && !this.winner) {
      let cellsAfterStart = this.cells.slice();
      cellsAfterStart[i] = this.currentPlayer;
      this.cells = cellsAfterStart;

      const currentWinner = this.hasWinner;
      if (currentWinner) {
        this.winner = currentWinner;
      }

      // if (this.hasWinner) {
      //   console.log(`Player ${this.currentPlayer} has won!`);
      // }

      console.log(`cellsAfterStart: ${cellsAfterStart}`);
      console.log(
        `Cell ${i} clicked, ${this.currentPlayer} now owns this cell.`,
      );

      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }

      console.log(`Player switched to ${this.currentPlayer}`);
    }
  }
}
