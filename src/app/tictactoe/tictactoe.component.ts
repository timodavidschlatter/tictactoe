import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css',
})

export class TictactoeComponent {
  board: string[] = [];
  currentPlayer: string = 'X';
  winner: string | null = null; // Winner property can either be a string or null. Default init is null.

  constructor() {
    this.resetGame(); // Initialize the board when the component is created
  }

  makeMove(index: number): void {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winPatterns.some((pattern) =>
      pattern.every((index) => this.board[index] === this.currentPlayer)
    );
  }

  resetGame(): void {
    this.board = Array(9).fill(null); // Initialize the board with 9 null values
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
