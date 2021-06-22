import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hoops-website';
  isShow = true;
  constructor(private route: Router){

  }

  ngOnInit(){
   
  }
  onActivate(event) {
    window.scroll(0,0);
   
}
}
