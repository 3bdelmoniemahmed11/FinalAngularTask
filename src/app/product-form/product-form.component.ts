import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/productsService';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.getProductName.setValue(this.product.productName);
          this.getProductPrice.setValue(this.product.price);
          this.getProductQuantity.setValue(this.product.quantity);
        },
      });
    }
  }
  myForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(10)]),
    quantity: new FormControl('', [Validators.required]),
  });
  get getProductName() {
    return this.myForm.controls['productName'];
  }
  get getProductPrice() {
    return this.myForm.controls['price'];
  }
  get getProductQuantity() {
    return this.myForm.controls['quantity'];
  }

  formSubmit(e: any) {
    e.preventDefault();
    if (this.myForm.status == 'VALID') {
      console.log(this.productId);
      if (this.productId == 0) {
        this.productService.addProduct(this.myForm.value).subscribe({
          next: () => {
            this.route.navigate(['/products']);
          },
        });
      } else {
        this.productService
          .editProduct(this.productId, this.myForm.value)
          .subscribe({
            next: () => {
              this.route.navigate(['/products']);
            },
          });
      }
    }
  }
}
