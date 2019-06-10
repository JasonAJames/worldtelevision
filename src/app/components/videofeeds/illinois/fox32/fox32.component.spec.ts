import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox32Component } from './fox32.component';

describe('Fox32Component', () => {
  let component: Fox32Component;
  let fixture: ComponentFixture<Fox32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
