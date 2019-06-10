import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wqad8Component } from './wqad-8.component';

describe('Wqad8Component', () => {
  let component: Wqad8Component;
  let fixture: ComponentFixture<Wqad8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wqad8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wqad8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
