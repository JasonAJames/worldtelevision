import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfie14Component } from './wfie-14.component';

describe('Wfie14Component', () => {
  let component: Wfie14Component;
  let fixture: ComponentFixture<Wfie14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wfie14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wfie14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
