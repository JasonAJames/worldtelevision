import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wttv4Component } from './wttv-4.component';

describe('Wttv4Component', () => {
  let component: Wttv4Component;
  let fixture: ComponentFixture<Wttv4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wttv4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wttv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
