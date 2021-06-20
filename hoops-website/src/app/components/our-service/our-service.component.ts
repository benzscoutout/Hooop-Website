import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Flickity from 'flickity';
import { flickityConfig } from 'src/app/config/flickity.config';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurServiceComponent implements OnInit, AfterViewInit {
  apiLoaded = false;
  imgArray = [{
    title: "1. Research",
    desc: "In the digital era, “data” is a key of success to every business. With years of experience in digital marketing, we can precisely serve you the set of information which maximizes your business potential.",
  },
  {
    title: "2. Strategy & Planning",
    desc: "Efficiently and effectively spend your budget on digital marketing plan by close consultation with experienced media planner. Reach to your target audience wherever they are.",
  },
  {
    title: "3. Creative",
    desc: "Struggling in coming up with new idea? Let’s 3rd party helps! Our team is full of fun, fresh, and young members. So you will always be able to explore the new angle of brand communication that you may never think of.",
  },
  {
    title: "4. Promote",
    desc: "Still have no idea how to increase your brand awareness? Not only suggest you any influencer but we will work on screening which influencers match with your brand image the most. You will get the right person with the right price rate to be your brand spokesperson.",
  },
  {
    title: "5. Report",
    desc: "Never wasted a single penny on doing something. You can always learn from what you have done. Out structured performance report will give you anything your brand want for further improvement. It can also be customized to match your business requirements.",
  }]

  constructor(private httpClient : HttpClient) { }
  jsonVdoGraphic;
  jsonProductionVdo;
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
    this.httpClient.get("assets/json/graphic-vdo.json").subscribe(data =>{
      console.log(data);
      this.jsonVdoGraphic = data;
    })
    this.httpClient.get("assets/json/production-vdo.json").subscribe(data =>{
      console.log(data);
      this.jsonProductionVdo = data;
    })
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
      {
        cellAlign: 'left',
        adaptiveHeight: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 2000,
        wrapAround: true
      }
    );


  }
}
