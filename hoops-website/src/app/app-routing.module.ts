import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFirstComponent } from './components/articles/article-first/article-first.component';
import { ArticleSecondComponent } from './components/articles/article-second/article-second.component';
import { ArticleThirdComponent } from './components/articles/article-third/article-third.component';
import { CryptowealthComponent } from './components/cryptowealth/cryptowealth.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OurServiceComponent } from './components/our-service/our-service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'our-service', pathMatch: 'full', component: OurServiceComponent },
  { path: 'cryptowealth', pathMatch: 'full', component: CryptowealthComponent },
  { path: 'articles/ธุรกิจสีดอกเลา', pathMatch: 'full', component: ArticleFirstComponent },
  { path: 'articles/5-jobboards', pathMatch: 'full', component: ArticleSecondComponent },
  { path: 'articles/audience-insights', pathMatch: 'full', component: ArticleThirdComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
