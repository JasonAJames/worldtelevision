import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox13Component } from './fox-13.component';

describe('Fox13Component', () => {
  let component: Fox13Component;
  let fixture: ComponentFixture<Fox13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
