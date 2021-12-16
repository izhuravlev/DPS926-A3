import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history-service/history.service';
import { History } from 'src/app/model/history-model/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  items: History[];

  constructor(private HS: HistoryService) {}

  ngOnInit() {
    this.items = this.HS.getHistory();
  }
}
