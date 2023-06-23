import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { TracksComponent } from './tracks/tracks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

import { ProductInfoComponent } from './product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import ProductsDetailsComponent from './products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ProductsComponent,
    ProductItemComponent,
    FooterComponent,
    TracksComponent,
    FormComponent,
    HomeComponent,
    ProductsDetailsComponent,
    ProductInfoComponent,
    LoginComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
