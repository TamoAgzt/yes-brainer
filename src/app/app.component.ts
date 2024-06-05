import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home' },
    // { title: 'Wordle Daily', url: '/folder/wordle_daily' },
    { title: 'Wordle Casual', url: '/folder/wordle_casual' },
    // { title: 'Sudoku Daily', url: '/folder/sudoku_daily' },
    { title: 'Sudoku Casual', url: '/folder/sudoku_casual' },
    // { title: 'Bingo Daily', url: '/folder/bingo_daily' },
    { title: 'Bingo Casual', url: '/folder/bingo_casual' },
  ];

  constructor() {}
}
