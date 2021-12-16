import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { KeyboardComponent } from 'src/app/components/keyboard/keyboard.component';
import { ListComponent } from 'src/app/components/list/list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, KeyboardComponent, ListComponent],
})
export class HomePageModule {}
