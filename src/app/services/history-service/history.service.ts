import { Injectable } from '@angular/core';
import { History } from 'src/app/model/history-model/history';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  history: History[] = [];

  constructor() {}

  getHistory(): History[] {
    return this.history;
  }

  getHistoryDetails(id: number): History {
    return this.history[id - 1];
  }

  updateHistory(hist: History) {
    this.history.push(hist);
  }

  getNextIndex(): number {
    return this.history.length + 1;
  }
}
