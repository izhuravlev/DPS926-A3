import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  newName: string;
  newPrice: number;
  newQuantity: number;

  checksPassed: boolean;

  constructor(
    private DB: StorageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.checksPassed = false;
  }

  async submitNewProduct() {
    this.checksPassed = true;
    await this.checkName();
    if (this.checksPassed) await this.checkPrice();
    if (this.checksPassed) await this.checkQuantity();
    if (this.checksPassed) {
      this.DB.addProduct(this.newName, this.newPrice, this.newQuantity);
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'New Product ' + this.newName + ' added successfully!',
        buttons: ['OK'],
      });
      await alert.present();
      this.checksPassed = false;
      this.newName = null;
      this.newPrice = null;
      this.newQuantity = null;
    }
  }

  async checkName() {
    if (!this.newName) {
      const alert = await this.alertController.create({
        header: 'Warning',
        message: 'Please Input product name!',
        buttons: ['OK'],
      });
      await alert.present();
      this.checksPassed = false;
    }
  }

  async checkPrice() {
    if (!this.newPrice || this.newPrice < 0) {
      const alert = await this.alertController.create({
        header: 'Warning',
        message: 'Please Input price more than 0.',
        buttons: ['OK'],
      });
      await alert.present();
      this.checksPassed = false;
      this.newPrice = null;
    }
  }

  async checkQuantity() {
    if (!this.newQuantity || this.newQuantity < 0 || this.newQuantity > 100) {
      const alert = await this.alertController.create({
        header: 'Warning',
        message: 'Please Input new quantity more than 0 and less than 100.',
        buttons: ['OK'],
      });
      await alert.present();
      this.checksPassed = false;
      this.newQuantity = null;
    }
  }
}
