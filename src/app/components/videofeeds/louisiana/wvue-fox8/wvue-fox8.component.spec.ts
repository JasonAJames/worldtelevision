import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WvueFox8Component } from './wvue-fox8.component';

describe('WvueFox8Component', () => {
  let component: WvueFox8Component;
  let fixture: ComponentFixture<WvueFox8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WvueFox8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WvueFox8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
