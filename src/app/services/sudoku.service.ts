import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  constructor() {}

  generateSudoku(): number[][] {
    const puzzle = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];
    return puzzle;
  }

  getTiles(): any[] {
    const puzzle = this.generateSudoku();
    const tiles: any[] = [];
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        const value = puzzle[i][j];
        tiles.push({
          value: value,
          prefilled: value !== 0,
          wrong: false,
        });
      }
    }
    return tiles;
  }

  // loadDailyChallenge(): number[][] {
  //   console.log('Loading Sudoku Daily Challenge');
  //   return this.generateSudoku();
  // }

  // loadCasualRound(): number[][] {
  loadRound(): number[][] {
    console.log('Loading Sudoku Casual Round');
    return this.generateSudoku();
  }

  validateSudoku(grid: number[][]): boolean {
    for (let i = 0; i < 9; i++) {
      if (
        !this.isValidRow(grid, i) ||
        !this.isValidColumn(grid, i) ||
        !this.isValidBox(grid, i)
      ) {
        alert('Something is wrong...!');
        return false;
      }
    }
    alert('You did it!');
    return true;
  }

  private isValidRow(grid: number[][], row: number): boolean {
    const seen = new Set();
    for (let num of grid[row]) {
      if (num !== 0 && seen.has(num)) return false;
      if (num !== 0) seen.add(num);
    }
    return seen.size === 9;
  }

  private isValidColumn(grid: number[][], col: number): boolean {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
      const num = grid[i][col];
      if (num !== 0 && seen.has(num)) return false;
      if (num !== 0) seen.add(num);
    }
    return seen.size === 9;
  }

  private isValidBox(grid: number[][], boxIndex: number): boolean {
    const seen = new Set();
    const startRow = 3 * Math.floor(boxIndex / 3);
    const startCol = 3 * (boxIndex % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const num = grid[startRow + i][startCol + j];
        if (num !== 0 && seen.has(num)) return false;
        seen.add(num);
      }
    }
    return true;
  }
}
