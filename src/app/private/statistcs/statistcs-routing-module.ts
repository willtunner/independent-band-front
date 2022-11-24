import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBandsComponent } from './list-bands/list-bands.component';
import { CreateBandComponent } from './create-band/create-band.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListBandsComponent
  },
  {
    path: 'create',
    component: CreateBandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class StatisticsRoutingModule { }