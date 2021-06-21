import { Injectable } from '@angular/core';
import FieldsObject = UniversalAnalytics.FieldsObject;
import gtag, { install } from 'ga-gtag';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class GoogleAnalyticsService {
  eventEmitter: any;

  constructor() {
    install(environment.firebase.googleAnalyticsTrackingID);

  }

  setPageView(page: string, title: string) {
    gtag('event', 'page_view', { 'page': page, 'title': title });
  }



  setEvent(eventName: string, jsonParams: any) {
    gtag('event', eventName, jsonParams);
  }


}
