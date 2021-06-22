import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { flickityConfig } from '../../config/flickity.config';
import * as Flickity from 'flickity';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {
  apiLoaded = false;
  jsonOurSuccess;
  jsonOurClient;
  constructor(private ga: GoogleAnalyticsService, private scroller: ViewportScroller, private httpClient: HttpClient, private route: Router) { }

  ngOnInit(): void {

    
    this.ga.setPageView('Home', 'Landing');
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit() {
    this.httpClient.get("assets/json/our-client.json").subscribe(data => {
      this.jsonOurClient = data;
      new Flickity('.main-carousel',
      flickityConfig.option
    );
    })
    this.httpClient.get("assets/json/our-success.json").subscribe(data => {
      this.jsonOurSuccess = data;
      new Flickity('.client-carousel',
      flickityConfig.option2
    );
    })
  
   

  }

  clickYoutube() {
    this.ga.setEvent('Home Page', { 'click': 'watch youtube' })
  }

  clickGetStart() {
    this.ga.setEvent('Home Page', { 'click': 'Get Start' })
    this.scroller.scrollToAnchor('header');
  }

  clickArticle(name: string, link: string) {
    this.route.navigate([link]);
    this.ga.setEvent('Home Page', { 'click': 'Article ' + name })
  }
}
