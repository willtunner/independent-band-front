import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBandComponent } from './create-band/create-band.component';
import { ListBandsComponent } from './list-bands/list-bands.component';
import { StatisticsRoutingModule } from './statistcs-routing-module';
import { AppModule } from "../../app.module";
import { SocialMediaComponent } from 'src/app/components/social-media/social-media.component';


@NgModule({
    declarations: [
        CreateBandComponent,
        ListBandsComponent,
        SocialMediaComponent
    ],
    imports: [
        CommonModule,
        StatisticsRoutingModule,
    ]
})
export class StatistcsModule { }
