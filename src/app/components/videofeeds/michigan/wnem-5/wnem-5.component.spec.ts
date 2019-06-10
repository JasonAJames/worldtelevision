import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wnem5Component } from './wnem-5.component';

describe('Wnem5Component', () => {
  let component: Wnem5Component;
  let fixture: ComponentFixture<Wnem5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wnem5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wnem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
