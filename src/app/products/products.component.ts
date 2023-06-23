import { Component, Input, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ProductsService } from 'src/services/productsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent  {
  @Input() productList: ProductInfo[] = [];
  productList2: any = [];

  constructor() {}

  getData(e: any) {
    console.log(e);
  }
}
