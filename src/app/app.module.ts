

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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FloatButtomComponent } from './components/float-buttom/float-buttom.component';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { SlideImagesComponent } from './components/slide-images/slide-images.component';
import { LastReleasesComponent } from './components/last-releases/last-releases.component';
import { RigthMenuComponent } from './components/rigth-menu/rigth-menu.component';
import { MatTableModule } from '@angular/material/table';
import { MostPopularSongsComponent } from './components/most-popular-songs/most-popular-songs.component';
import { NoticeMusicsComponent } from './components/notice-musics/notice-musics.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastbarComponent } from './components/toastbar/toastbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    HeaderComponent,
    FloatButtomComponent,
    SlideImagesComponent,
    LastReleasesComponent,
    RigthMenuComponent,
    MostPopularSongsComponent,
    NoticeMusicsComponent,
    ToastbarComponent,
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
    MatInputModule,
    NgTiltModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
