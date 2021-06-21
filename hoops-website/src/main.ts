import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




const trackingId = environment.firebase.googleAnalyticsTrackingID;
const gTagId = environment.firebase.gTagID;
if (trackingId) {
  const gtagSourceNode = document.createElement('script');
  gtagSourceNode.async = true;
  gtagSourceNode.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.body.appendChild(gtagSourceNode);

  const gtagInitNode = document.createElement('script');
  gtagInitNode.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', '${trackingId}', { send_page_view: false });
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${gTagId}');
`;
  document.body.appendChild(gtagInitNode);
}

