import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { FooterComponent } from './shared-component/footer/footer.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './shared-component/header/header.component';
import { CryptowealthComponent } from './components/cryptowealth/cryptowealth.component';
import { ArticleFirstComponent } from './components/articles/article-first/article-first.component';
import { ArticleSecondComponent } from './components/articles/article-second/article-second.component';
import { ArticleThirdComponent } from './components/articles/article-third/article-third.component';
import { BabySharkComponent } from './components/baby-shark/baby-shark.component';
import { from, Observable } from 'rxjs';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../assets/i18n/${lang}.json`));
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    OurServiceComponent,
    HeaderComponent,
    CryptowealthComponent,
    ArticleFirstComponent,
    ArticleSecondComponent,
    ArticleThirdComponent,
    BabySharkComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
