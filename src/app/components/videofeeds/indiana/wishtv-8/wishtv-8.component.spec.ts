import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishtv8Component } from './wishtv-8.component';

describe('Wishtv8Component', () => {
  let component: Wishtv8Component;
  let fixture: ComponentFixture<Wishtv8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wishtv8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wishtv8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
