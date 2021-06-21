import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false;
  isShow = true;
  constructor(private route: Router, private activeroute: ActivatedRoute, private scroller: ViewportScroller, private ga: GoogleAnalyticsService) { }

  ngOnInit(): void {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    

  }

  onClickLogo() {
    this.ga.setEvent('Header', { 'click': 'Logo'})
  }


  clickService(){
    this.ga.setEvent('Header', { 'click': 'Services'})
  }

  clickCryptoWealth(){
    this.ga.setEvent('Header', { 'click': 'CryptoWealth'})
  }

  clickLicensing(){
    this.ga.setEvent('Header', { 'click': 'Licensing'})
  }

  clickContact(){
    this.ga.setEvent('Header', { 'click': 'Contact Us'})
    this.scroller.scrollToAnchor('Footer');
  }
}
