import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cryptowealth',
  templateUrl: './cryptowealth.component.html',
  styleUrls: ['./cryptowealth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CryptowealthComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  gotoCryptoWealth(){
    this.ga.setEvent('CryptoWealth Page', { 'click': 'Go to CryptoWealth' })
    window.open(environment.link.cryptowealth, '_blank');
  }

}
