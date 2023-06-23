import { Component } from '@angular/core';
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: ProductInfo[] = [
    { id: 1, Name: 'nature1', Quantity: 1, price: 200, imgSrc: '1.jpg' },
    { id: 2, Name: 'nature2', Quantity: 0, price: 200, imgSrc: '2.jpg' },
    { id: 3, Name: 'nature3', Quantity: 2, price: 200, imgSrc: '3.jpg' },
    { id: 4, Name: 'nature4', Quantity: 2, price: 200, imgSrc: '1.jpg' },
  ];
}
