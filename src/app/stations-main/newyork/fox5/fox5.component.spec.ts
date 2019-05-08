import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox5Component } from './fox5.component';

describe('Fox5Component', () => {
  let component: Fox5Component;
  let fixture: ComponentFixture<Fox5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
