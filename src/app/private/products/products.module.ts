import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { Lv21Component } from './pages/lv2.1/lv2.1.component';
import { Lv31Component } from './pages/lv3.1/lv3.1.component';
import { Lv32Component } from './pages/lv3.2/lv3.2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Lv21Component,
    Lv31Component,
    Lv32Component
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
