import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ksla12Component } from './ksla-12.component';

describe('Ksla12Component', () => {
  let component: Ksla12Component;
  let fixture: ComponentFixture<Ksla12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ksla12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ksla12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
