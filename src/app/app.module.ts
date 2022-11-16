import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { StatistcsComponent } from './private/statistcs/statistcs.component';
import { CoupensComponent } from './private/coupens/coupens.component';
import { PagesComponent } from './private/pages/pages.component';
import { MediaComponent } from './private/media/media.component';
import { SettingsComponent } from './private/settings/settings.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductsComponent } from './private/products/products.component';
import { SublevelMenuComponent } from './private/coupens/sublevel-menu/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatistcsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    ProductsComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
