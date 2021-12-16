import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product-model/product';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  @Output() chosenItem = new EventEmitter<number>();

  constructor(private db: StorageService) {}

  ngOnInit() {
    this.products = this.db.getProducts();
  }

  productSelected(id: number) {
    this.chosenItem.emit(id);
  }
}
