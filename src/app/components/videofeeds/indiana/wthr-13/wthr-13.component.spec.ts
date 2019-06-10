import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wthr13Component } from './wthr-13.component';

describe('Wthr13Component', () => {
  let component: Wthr13Component;
  let fixture: ComponentFixture<Wthr13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wthr13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wthr13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
