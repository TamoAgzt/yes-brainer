import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BingoService {
  constructor() {}
  // loadDailyChallenge() {
  //   console.log('Loading Bingo Daily Challenge');
  // }

  // loadCasualRound() {
  loadRound() {
    console.log('Loading Bingo Casual Round');
  }
}
