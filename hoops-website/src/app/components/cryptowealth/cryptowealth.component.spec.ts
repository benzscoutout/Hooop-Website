import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptowealthComponent } from './cryptowealth.component';

describe('CryptowealthComponent', () => {
  let component: CryptowealthComponent;
  let fixture: ComponentFixture<CryptowealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptowealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptowealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
