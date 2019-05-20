import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtLiveComponent } from './et-live.component';

describe('EtLiveComponent', () => {
  let component: EtLiveComponent;
  let fixture: ComponentFixture<EtLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
