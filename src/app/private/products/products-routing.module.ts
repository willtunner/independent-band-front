import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lv21Component } from './pages/lv2.1/lv2.1.component';
import { Lv31Component } from './pages/lv3.1/lv3.1.component';
import { Lv32Component } from './pages/lv3.2/lv3.2.component';

const routes: Routes = [
  {
    path: 'level2.1',
    component: Lv21Component
  },
  {
    path: 'level3.1',
    component: Lv31Component
  },
  {
    path: 'level3.2',
    component: Lv32Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
