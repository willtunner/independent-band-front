

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { StatistcsComponent } from './private/statistcs/statistcs.component';
import { PagesComponent } from './private/pages/pages.component';
import { MediaComponent } from './private/media/media.component';
import { SettingsComponent } from './private/settings/settings.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductsComponent } from './private/products/products.component';
import { SublevelMenuComponent } from './private/coupens/sublevel-menu/sublevel-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule} from '@angular/common/http'

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { ListBandsComponent } from './private/statistcs/list-bands/list-bands.component';
import { CreateBandComponent } from './private/statistcs/create-band/create-band.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    ProductsComponent,
    SublevelMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
