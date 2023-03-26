import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBandComponent } from './create-band/create-band.component';
import { ListBandsComponent } from './list-bands/list-bands.component';
import { StatisticsRoutingModule } from './statistcs-routing-module';
import { SocialMediaComponent } from 'src/app/components/social-media/social-media.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddBandFormComponent } from './create-band/add-band-form/add-band-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
  


@NgModule({
    declarations: [
        CreateBandComponent,
        ListBandsComponent,
        SocialMediaComponent,
        AddBandFormComponent
    ],
    imports: [
        CommonModule,
        StatisticsRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatCommonModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule
    ]
})
export class StatistcsModule { }
