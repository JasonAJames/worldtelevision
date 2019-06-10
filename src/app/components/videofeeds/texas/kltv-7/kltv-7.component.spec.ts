import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kltv7Component } from './kltv-7.component';

describe('Kltv7Component', () => {
  let component: Kltv7Component;
  let fixture: ComponentFixture<Kltv7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kltv7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kltv7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
