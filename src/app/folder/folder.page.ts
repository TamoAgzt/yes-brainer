import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SudokuService } from '../services/sudoku.service';
import { WordleService } from '../services/wordle.service';
import { BingoService } from '../services/bingo.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: [
    './folder.page.scss',
    '../services/wordle.scss',
    '../services/sudoku.scss',
    '../services/bingo.scss',
  ],
})
export class FolderPage implements OnInit {
  public page!: string;
  public pageTitle!: string;
  private activatedRoute = inject(ActivatedRoute);
  public sudokuPuzzle: number[][] = [];
  public tiles: any[] = [];
  public isStarted: boolean = false;
  private gameName: string = '';

  constructor(
    private sudokuService: SudokuService,
    private wordleService: WordleService,
    private bingoService: BingoService,
    private scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
    var pageSplit = this.page.split('_');
    this.gameName = pageSplit[0];
    this.tiles = this.sudokuService.getTiles();

    if (pageSplit[0] != 'home') {
      this.isStarted = true;
    }

    this.loadGameBasedOnUrl(pageSplit[0], pageSplit[1]);
    for (let index = 0; index < pageSplit.length; index++) {
      pageSplit[index] =
        pageSplit[index].charAt(0).toUpperCase() + pageSplit[index].slice(1);
    }

    this.pageTitle = pageSplit.join(' ');
  }

  loadGameBasedOnUrl(game: string, mode: string) {
    if (game === 'sudoku') {
      // if (mode === 'daily') {
      // this.sudokuPuzzle = this.sudokuService.loadDailyChallenge();
      this.sudokuPuzzle = this.sudokuService.loadRound();
      // } else if (mode === 'casual') {
      //   this.sudokuPuzzle = this.sudokuService.loadCasualRound();
      // }
    } else if (game === 'wordle') {
      // if (mode === 'daily') {
      this.wordleService.loadRound();
      // } else if (mode === 'casual') {
      //   this.wordleService.loadCasualRound();
      // }
    } else if (game === 'bingo') {
      // if (mode === 'daily') {
      this.bingoService.loadRound();
      // } else if (mode === 'casual') {
      //   this.bingoService.loadCasualRound();
      // }
    } else {
      console.log('home');
    }
  }

  validateSudoku() {
    const isValid = this.sudokuService.validateSudoku(this.sudokuPuzzle);
    if (isValid) {
      this.scoreService.updateScore(this.gameName);
    } else {
    }
  }

  getCellDisplayValue(cell: number): string {
    return cell === 0 ? '' : cell.toString();
  }

  onCellChange(value: string, rowIndex: number, colIndex: number) {
    const intValue = parseInt(value);
    if (!isNaN(intValue) && intValue >= 1 && intValue <= 9) {
      this.sudokuPuzzle[rowIndex][colIndex] = intValue;
    } else if (value === '') {
      this.sudokuPuzzle[rowIndex][colIndex] = 0;
    }
  }

  ngOnDestroy() {
    if (this.isStarted) {
      this.scoreService.updateUnfinished(this.gameName);
    }
  }
}
