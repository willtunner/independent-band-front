import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { MediaComponent } from './private/media/media.component';
import { PagesComponent } from './private/pages/pages.component';
import { SettingsComponent } from './private/settings/settings.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  {path: 'dashboard', loadChildren: () => import('./private/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'products', loadChildren: () => import('./private/products/products.module').then(m => m.ProductsModule)},
  {path: 'band', loadChildren: () => import('./private/band/band.module').then(m => m.BandModule)},
  {path: 'statistics', loadChildren: () => import('./private/statistcs/statistcs.module').then(m => m.StatistcsModule)},
  {path: 'coupens', loadChildren: () => import('./private/coupens/coupens.module').then(m => m.CoupensModule)},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
