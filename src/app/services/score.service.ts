import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private scoreKey = 'solved';
  private unfinishedKey = 'unfinished';

  constructor() {
    if (!localStorage.getItem(this.scoreKey)) {
      this.resetScore();
    }
    if (!localStorage.getItem(this.unfinishedKey)) {
      this.resetUnfinished();
    }
  }

  getScore(): any {
    return JSON.parse(localStorage.getItem(this.scoreKey) || '{}');
  }

  updateScore(game: string): void {
    const scores = this.getScore();
    if (!scores[game]) {
      scores[game] = 0;
    }
    scores[game] += 1;
    localStorage.setItem(this.scoreKey, JSON.stringify(scores));
  }

  resetScore(): void {
    const initialScores = {
      sudoku: 0,
      wordle: 0,
      bingo: 0,
    };
    localStorage.setItem(this.scoreKey, JSON.stringify(initialScores));
  }

  getUnfinished(): any {
    return JSON.parse(localStorage.getItem(this.unfinishedKey) || '{}');
  }

  updateUnfinished(game: string): void {
    const unfinishedGames = this.getScore();
    if (!unfinishedGames[game]) {
      unfinishedGames[game] = 0;
    }
    unfinishedGames[game] += 1;
    localStorage.setItem(this.unfinishedKey, JSON.stringify(unfinishedGames));
  }

  resetUnfinished(): void {
    const initialUnfinished = {
      sudoku: 0,
      wordle: 0,
      bingo: 0,
    };
    localStorage.setItem(this.unfinishedKey, JSON.stringify(initialUnfinished));
  }
}
