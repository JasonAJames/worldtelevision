import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wlbt3Component } from './wlbt-3.component';

describe('Wlbt3Component', () => {
  let component: Wlbt3Component;
  let fixture: ComponentFixture<Wlbt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wlbt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wlbt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
