import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'http://localhost:3005/products';
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(this.baseUrl);
  }
  getProductById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  addProduct(product: any) {
    return this.http.post(this.baseUrl, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  editProduct(id: number, product: any) {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }
}
