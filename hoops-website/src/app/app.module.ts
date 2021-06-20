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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    OurServiceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
