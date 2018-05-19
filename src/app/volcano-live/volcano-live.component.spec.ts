import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoLiveComponent } from './volcano-live.component';

describe('VolcanoLiveComponent', () => {
  let component: VolcanoLiveComponent;
  let fixture: ComponentFixture<VolcanoLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcanoLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolcanoLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
