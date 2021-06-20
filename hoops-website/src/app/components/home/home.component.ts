import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { flickityConfig } from '../../config/flickity.config';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {
  apiLoaded = false;
  imgArray = [{
    image: "assets/images/customer/customer-1.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-2.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-3.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-4.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-5.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-6.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-7.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-8.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-9.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-10.png",
    link: ""
  },]
  imgClient = [{
    image: "assets/images/customer/customer-1.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-2.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-3.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-4.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-5.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-6.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-7.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-8.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-9.png",
    link: ""
  }, {
    image: "assets/images/customer/customer-10.png",
    link: ""
  },]
  constructor() { }

  ngOnInit(): void {
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
    const flickityCareer = new Flickity('.main-carousel',
      flickityConfig.option
    );
    const clientCarousel = new Flickity('.client-carousel',
    flickityConfig.option2
  );
    
  }
}
