import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowPicturesComponent } from './tomorrow-pictures.component';

describe('TomorrowPicturesComponent', () => {
  let component: TomorrowPicturesComponent;
  let fixture: ComponentFixture<TomorrowPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomorrowPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
