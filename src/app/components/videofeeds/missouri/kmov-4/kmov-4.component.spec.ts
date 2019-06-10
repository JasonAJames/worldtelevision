import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmov4Component } from './kmov-4.component';

describe('Kmov4Component', () => {
  let component: Kmov4Component;
  let fixture: ComponentFixture<Kmov4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kmov4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmov4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
