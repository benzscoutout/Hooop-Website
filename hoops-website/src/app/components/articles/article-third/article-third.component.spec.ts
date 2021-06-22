import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThirdComponent } from './article-third.component';

describe('ArticleThirdComponent', () => {
  let component: ArticleThirdComponent;
  let fixture: ComponentFixture<ArticleThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
