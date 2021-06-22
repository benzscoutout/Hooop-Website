import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GoogleAnalyticsService } from 'src/app/service/google-analytic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-third',
  templateUrl: './article-third.component.html',
  styleUrls: ['./article-third.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleThirdComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsService,private metaTagService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.SEOInit();
    this.ga.setPageView('Article', 'Article - Audience Insights');
  }
  SEOInit() {
    this.titleService.setTitle(environment.seo[2].title);
    this.metaTagService.updateTag({ name: 'description', content: environment.seo[2].desc });
    this.metaTagService.updateTag({ name: 'keywords', content: environment.seo[2].keyword });
    this.metaTagService.updateTag({ property: 'og:keywords', content: environment.seo[2].keyword });
    this.metaTagService.updateTag({ property: 'og:description', content: environment.seo[2].desc });
    this.metaTagService.updateTag({ property: 'og:title', content: environment.seo[2].title });
    this.metaTagService.updateTag({ property: 'og:url', content: environment.seo[2].url });
    this.metaTagService.updateTag({ property: 'og:image', content: environment.seo[2].image_url });

  }

}
