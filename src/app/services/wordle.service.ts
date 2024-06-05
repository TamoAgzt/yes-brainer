import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordleService {
  constructor() {}
  // loadDailyChallenge() {
  //   console.log('Loading Wordle Daily Challenge');
  // }

  // loadCasualRound() {
  loadRound() {
    console.log('Loading Wordle Casual Round');
  }
}
