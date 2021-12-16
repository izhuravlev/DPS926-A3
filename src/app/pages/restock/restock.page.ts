import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product-model/product';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  items: Product[] = [];
  chosenItem: Product;
  selectedItem: any;
  input: number;
  categoryName: string;

  constructor(
    private DB: StorageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.items = this.DB.getProducts();
    this.categoryName = 'Type';
  }

  productSelected(id: number) {
    this.chosenItem = this.items[id - 1];
    this.categoryName = this.chosenItem.name;
  }

  async restock() {
    if (!this.chosenItem) {
      const alert = await this.alertController.create({
        header: 'Warning',
        message: 'Please select product first.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      if (!this.input) {
        const alert = await this.alertController.create({
          header: 'Warning',
          message: 'Please Input the quantity to be restocked first.',
          buttons: ['OK'],
        });
        await alert.present();
      } else {
        if (this.input < 0 || this.input > 100) {
          const alert = await this.alertController.create({
            header: 'Warning',
            message: 'Please provide input more than 0 and less than 100.',
            buttons: ['OK'],
          });
          await alert.present();
          this.input = null;
        } else {
          const alert = await this.alertController.create({
            header: 'Success!',
            message:
              this.input + ' items added to ' + this.chosenItem.name + '!',
            buttons: ['OK'],
          });
          await alert.present();
          this.DB.restockProduct(this.chosenItem.id, this.input);
          this.chosenItem = null;
          this.categoryName = 'Type';
          this.input = null;
        }
      }
    }
  }
}
