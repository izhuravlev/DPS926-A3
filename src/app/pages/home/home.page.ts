import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Product } from 'src/app/model/product-model/product';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  quant: string;
  categoryName: string;
  totalVal: number;
  product: Product;

  constructor(
    private db: StorageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.categoryName = 'Type';
    this.totalVal = 0.0;
    this.quant = 'Quantity';
  }

  itemChosen(id: number) {
    this.product = this.db.getProductByID(id);
    this.categoryName = this.product.name;
    this.quant = 'Quantity';
    this.totalVal = 0.0;
  }

  async digitChosen(num: number) {
    if (!this.product) {
      const alert = await this.alertController.create({
        header: 'Warning',
        message: 'Please select product first.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      if (this.quant === 'Quantity' || this.quant === '0') {
        this.quant = num.toString();
      } else {
        this.quant += num.toString();
      }
      this.totalVal = parseFloat(
        (parseInt(this.quant) * this.product.price).toFixed(2)
      );
    }
  }

  async buyClicked() {
    if (this.totalVal == 0) {
      const alert = await this.alertController.create({
        header: 'Warning',
        message:
          'Please input quantity first. \nTo cancel purchase select another product',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      if (parseInt(this.quant) > this.product.quantity) {
        const alert = await this.alertController.create({
          header: 'Warning',
          message: 'Quantity bigger than items in stock.',
          buttons: ['OK'],
        });
        await alert.present();
        this.totalVal = 0.0;
        this.quant = 'Quantity';
      } else {
        this.db.sellProduct(this.product.id, parseInt(this.quant));
        this.product = null;
        this.categoryName = 'Type';
        this.totalVal = 0.0;
        this.quant = 'Quantity';
      }
    }
  }
}
