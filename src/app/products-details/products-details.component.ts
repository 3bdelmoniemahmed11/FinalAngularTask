import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { productDetials } from '../productsList';
import { ProductsService } from 'src/services/productsService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export default class ProductsDetailsComponent implements OnInit {
  productList: ProductInfo[] = productDetials;
  productList2: any;
  constructor(
    private productServer: ProductsService,
    private routeactivited: ActivatedRoute
  ) {}
  delete(i: number) {
    this.productServer.deleteProduct(i).subscribe({
      next: () => {
        this.getProducts();
      },
    });
  }
  getProducts() {
    this.productServer.getAllProducts().subscribe({
      next: (response) => {
        this.productList2 = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
