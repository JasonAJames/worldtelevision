import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wtol11Component } from './wtol-11.component';

describe('Wtol11Component', () => {
  let component: Wtol11Component;
  let fixture: ComponentFixture<Wtol11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wtol11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wtol11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
