import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import ProductsDetailsComponent from './products-details/products-details.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsDetailsComponent },
  { path: 'productInfo/:id', component: ProductInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
