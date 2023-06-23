import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor() {
    this.myEvent.emit(this.count);
  }
  @Input() productChild: ProductInfo[] = [];
  count: number = 10;
  @Output() myEvent = new EventEmitter();

}
