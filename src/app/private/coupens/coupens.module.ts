import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CoupensComponent } from './coupens.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoupensComponent],
  imports: [
    CommonModule,
    CoupensRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class CoupensModule { }
