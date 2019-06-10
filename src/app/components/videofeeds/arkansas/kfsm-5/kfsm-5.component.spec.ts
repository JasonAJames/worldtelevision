import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kfsm5Component } from './kfsm-5.component';

describe('Kfsm5Component', () => {
  let component: Kfsm5Component;
  let fixture: ComponentFixture<Kfsm5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kfsm5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kfsm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
