import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSecondComponent } from './article-second.component';

describe('ArticleSecondComponent', () => {
  let component: ArticleSecondComponent;
  let fixture: ComponentFixture<ArticleSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
