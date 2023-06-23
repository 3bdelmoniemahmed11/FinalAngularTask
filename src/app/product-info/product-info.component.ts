import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/productsService';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private prodcutService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  backToHome() {
    this.route.navigate(['/products']);
  }
  ngOnInit(): void {
    this.prodcutService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
