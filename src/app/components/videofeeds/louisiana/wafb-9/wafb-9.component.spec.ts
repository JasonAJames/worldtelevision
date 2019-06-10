import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wafb9Component } from './wafb-9.component';

describe('Wafb9Component', () => {
  let component: Wafb9Component;
  let fixture: ComponentFixture<Wafb9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wafb9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wafb9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
