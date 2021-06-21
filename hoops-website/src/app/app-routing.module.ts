import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptowealthComponent } from './components/cryptowealth/cryptowealth.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OurServiceComponent } from './components/our-service/our-service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'our-service', pathMatch: 'full', component: OurServiceComponent },
  { path: 'cryptowealth', pathMatch: 'full', component: CryptowealthComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
