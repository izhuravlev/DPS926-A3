import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product-model/product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  quant: number;
  categoryName: string;
  totalVal: number;
  product: Product;

  constructor() {}

  ngOnInit() {
    this.categoryName = 'Type';
    this.totalVal = 0.0;
    this.quant = 0;
  }
}
