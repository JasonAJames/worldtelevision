import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wsoc9Component } from './wsoc9.component';

describe('Wsoc9Component', () => {
  let component: Wsoc9Component;
  let fixture: ComponentFixture<Wsoc9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wsoc9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wsoc9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
