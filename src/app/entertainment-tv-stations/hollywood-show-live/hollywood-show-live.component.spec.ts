import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodShowLiveComponent } from './hollywood-show-live.component';

describe('HollywoodShowLiveComponent', () => {
  let component: HollywoodShowLiveComponent;
  let fixture: ComponentFixture<HollywoodShowLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollywoodShowLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollywoodShowLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
