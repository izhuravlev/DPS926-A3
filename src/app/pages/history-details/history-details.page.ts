import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/model/history-model/history';
import { HistoryService } from 'src/app/services/history-service/history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.page.html',
  styleUrls: ['./history-details.page.scss'],
})
export class HistoryDetailsPage implements OnInit {
  item: History;
  itemId: number;

  constructor(
    private HS: HistoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.itemId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.item = this.HS.getHistoryDetails(this.itemId);
  }
}
