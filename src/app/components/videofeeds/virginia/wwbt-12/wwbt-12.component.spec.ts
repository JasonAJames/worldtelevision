import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wwbt12Component } from './wwbt-12.component';

describe('Wwbt12Component', () => {
  let component: Wwbt12Component;
  let fixture: ComponentFixture<Wwbt12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wwbt12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wwbt12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
