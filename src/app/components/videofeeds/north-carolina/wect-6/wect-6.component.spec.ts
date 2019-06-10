import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wect6Component } from './wect-6.component';

describe('Wect6Component', () => {
  let component: Wect6Component;
  let fixture: ComponentFixture<Wect6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wect6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wect6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
