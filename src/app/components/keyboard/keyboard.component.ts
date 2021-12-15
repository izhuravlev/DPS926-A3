import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  totalVal: string;
  quant: string;
  current_val: number;

  constructor() {}

  ngOnInit() {
    this.quant = 'Quantity';
    this.current_val = 0.0;
    this.totalVal = 'Total';
  }

  buttonClicked(num: number) {
    this.current_val = num;
    if (this.quant === 'Quantity') {
      this.quant = num.toString();
    } else {
      this.quant += num.toString();
    }
  }
}
