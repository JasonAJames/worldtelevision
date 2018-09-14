import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { France2Component } from './france2.component';

describe('France2Component', () => {
  let component: France2Component;
  let fixture: ComponentFixture<France2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ France2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(France2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
