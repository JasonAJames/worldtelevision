import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kcpq13Component } from './kcpq-13.component';

describe('Kcpq13Component', () => {
  let component: Kcpq13Component;
  let fixture: ComponentFixture<Kcpq13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kcpq13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kcpq13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
