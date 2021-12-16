import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product-model/product';
import { History } from 'src/app/model/history-model/history';
import { HistoryService } from 'src/app/services/history-service/history.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  url = 'assets/products.json';
  storage: Product[] = [];
  array = [
    {
      id: 1,
      name: 'Pants',
      price: 50.7,
      quantity: 20,
    },
    {
      id: 2,
      name: 'Shoes',
      price: 90.0,
      quantity: 50,
    },
    {
      id: 3,
      name: 'Hats',
      price: 20.5,
      quantity: 10,
    },
    {
      id: 4,
      name: 'T-shirts',
      price: 14.99,
      quantity: 10,
    },
    {
      id: 5,
      name: 'Dresses',
      price: 70.3,
      quantity: 24,
    },
    {
      id: 6,
      name: 'Skirts',
      price: 34.99,
      quantity: 30,
    },
    {
      id: 7,
      name: 'Baseball hats',
      price: 29.99,
      quantity: 5,
    },
  ];

  constructor(private HS: HistoryService) {
    this.loadProduct();
  }

  loadProduct() {
    for (let item of this.array) {
      let product = new Product(item.id, item.name, item.price, item.quantity);
      this.storage.push(product);
    }
  }

  getProducts(): Product[] {
    return this.storage;
  }

  getProductByID(id: number): Product {
    return this.storage[id - 1];
  }

  restockProduct(id: number, quant: number) {
    this.storage[id - 1].quantity += quant;
  }

  sellProduct(id: number, quant: number): number {
    if (quant > this.storage[id - 1].quantity) {
      return -1;
    } else {
      this.storage[id - 1].quantity -= quant;
      let hist = new History(
        this.HS.getNextIndex(),
        this.storage[id - 1].name,
        quant,
        parseFloat((quant * this.storage[id - 1].price).toFixed(2)),
        new Date()
      );
      this.HS.updateHistory(hist);
      return this.storage[id - 1].quantity;
    }
  }

  addProduct(name: string, price: number, quant: number) {
    let index = this.storage.length + 1;
    let product = new Product(index, name, price, quant);
    this.storage.push(product);
  }
}
