import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, OnChanges {
  totalVal: string;

  constructor() {}

  @Input() total: number;

  @Output() digit = new EventEmitter<number>();
  @Output() buy = new EventEmitter<any>();

  ngOnInit() {
    this.totalVal = 'Total';
  }

  buttonClicked(num: number) {
    this.digit.emit(num);
  }

  buyClicked() {
    this.buy.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.total.currentValue == 0) {
      this.totalVal = 'Total';
    } else {
      this.totalVal = changes.total.currentValue.toString();
    }
  }
}
