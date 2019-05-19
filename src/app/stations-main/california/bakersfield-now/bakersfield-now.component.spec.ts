import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakersfieldNowComponent } from './bakersfield-now.component';

describe('BakersfieldNowComponent', () => {
  let component: BakersfieldNowComponent;
  let fixture: ComponentFixture<BakersfieldNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakersfieldNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakersfieldNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
