import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hoops-website';
  isShow = true;
  constructor(private route: Router,private translate: TranslateService){
    this.translate.addLangs(['en', 'th']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getDefaultLang());
  }

  ngOnInit(){
   
  }
  onActivate(event) {
    window.scroll(0,0);
   
}
}
