import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  clickTel1(){
    this.ga.setEvent('Footer', { 'click': 'Tel one'})
  }
  clickTel2(){
    this.ga.setEvent('Footer', { 'click': 'Tel two'})
  }


  clickAddLINE(){
    this.ga.setEvent('Footer', { 'click': 'LINE'})
    window.open("https://lin.ee/1ZBJcJu4M", "_blank");
  }
  clickFacebook(){
    this.ga.setEvent('Footer', { 'click': 'Facebook'})
    window.open("https://www.facebook.com/hooopagency", "_blank");
  }

  clickIg(){
    this.ga.setEvent('Footer', { 'click': 'IG'})
    window.open("https://www.instagram.com/hooopagency/", "_blank");
  }

  clickMap(){
    this.ga.setEvent('Footer', { 'click': 'Map'})
    window.open('https://g.page/hooopagency?share', '_blank');
  }

}
