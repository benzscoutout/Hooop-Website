import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySharkComponent } from './baby-shark.component';

describe('BabySharkComponent', () => {
  let component: BabySharkComponent;
  let fixture: ComponentFixture<BabySharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabySharkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabySharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
