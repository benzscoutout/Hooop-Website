import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';

@Component({
  selector: 'app-baby-shark',
  templateUrl: './baby-shark.component.html',
  styleUrls: ['./baby-shark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BabySharkComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  clickYoutube(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Youtube Right' })
    window.open("https://www.youtube.com/c/pinkfong/featured", '_blank');
  }

  clickFacebook(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Facebook Page' })
    window.open("https://www.facebook.com/Pinkfong.BabyShark.TH", '_blank');
  }

  clickWebsite(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Website' })
    window.open("https://www.pinkfong.com/en/", '_blank');
  }

  clickVDOYoutube(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto VDO YOUTUBE' })
    window.open("https://youtu.be/XqZsoesa55w", '_blank');
  }

  clickYoutubeInter(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Youtube channel Inter' })
    window.open("https://www.youtube.com/c/pinkfong/featured", '_blank');
  }

  clickYoutubeThailand(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Youtube Channel Thailand' })
    window.open("https://www.youtube.com/c/PinkfongTHA/featured", '_blank');
  }

  clickMashita(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Masita Website' })
    window.open("https://www.facebook.com/MasitaSeaweed/", '_blank');
  }

  clickGQ(){
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto GQ Website' })
    window.open("https://gqsize.com/", '_blank');
  }

  clickBePartnership(){
    
    this.ga.setEvent('LICENSING BABYSHARK', { 'click': 'Goto Contact Form00' })
    window.open("https://forms.gle/zU7RNznPGJXjapkH9", '_blank');
  }

}
