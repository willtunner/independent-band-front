import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBandComponent } from './create-band/create-band.component';
import { ListBandsComponent } from './list-bands/list-bands.component';
import { StatisticsRoutingModule } from './statistcs-routing-module';


@NgModule({
  declarations: [
    CreateBandComponent,
    ListBandsComponent
  ],
  imports: [
  CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatistcsModule { }
