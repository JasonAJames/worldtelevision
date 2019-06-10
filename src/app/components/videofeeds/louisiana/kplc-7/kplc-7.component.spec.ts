import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kplc7Component } from './kplc-7.component';

describe('Kplc7Component', () => {
  let component: Kplc7Component;
  let fixture: ComponentFixture<Kplc7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kplc7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kplc7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
