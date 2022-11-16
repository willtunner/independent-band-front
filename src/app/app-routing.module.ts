import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './private/coupens/coupens.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { MediaComponent } from './private/media/media.component';
import { PagesComponent } from './private/pages/pages.component';
import { ProductsComponent } from './private/products/products.component';
import { SettingsComponent } from './private/settings/settings.component';
import { StatistcsComponent } from './private/statistcs/statistcs.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatistcsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
