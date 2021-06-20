import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false;
  isShow = true;
  constructor(private route: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    

  }

  onClickLogo() {

  }


  clickService(){

  }

  clickCryptoWealth(){

  }

  clickLicensing(){

  }

  clickContact(){

  }
}
