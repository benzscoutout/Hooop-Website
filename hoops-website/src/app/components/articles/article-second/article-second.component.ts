import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-second',
  templateUrl: './article-second.component.html',
  styleUrls: ['./article-second.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleSecondComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsService,private metaTagService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.SEOInit();
    this.ga.setPageView('Article', 'Article - 5 Jobboards');
  }

  clickJobbard(source: string){
    this.ga.setEvent('Article 5 Jobboard', { 'click': 'Jobboard : ' + source })
  }

  SEOInit() {
    this.titleService.setTitle(environment.seo[1].title);
    this.metaTagService.updateTag({ name: 'description', content: environment.seo[1].desc });
    this.metaTagService.updateTag({ name: 'keywords', content: environment.seo[1].keyword });
    this.metaTagService.updateTag({ property: 'og:keywords', content: environment.seo[1].keyword });
    this.metaTagService.updateTag({ property: 'og:description', content: environment.seo[1].desc });
    this.metaTagService.updateTag({ property: 'og:title', content: environment.seo[1].title });
    this.metaTagService.updateTag({ property: 'og:url', content: environment.seo[1].url });
    this.metaTagService.updateTag({ property: 'og:image', content: environment.seo[1].image_url });

  }

}
