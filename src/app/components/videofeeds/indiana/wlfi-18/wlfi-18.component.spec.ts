import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wlfi18Component } from './wlfi-18.component';

describe('Wlfi18Component', () => {
  let component: Wlfi18Component;
  let fixture: ComponentFixture<Wlfi18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wlfi18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wlfi18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
