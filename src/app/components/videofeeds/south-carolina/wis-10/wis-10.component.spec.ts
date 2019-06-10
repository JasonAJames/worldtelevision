import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wis10Component } from './wis-10.component';

describe('Wis10Component', () => {
  let component: Wis10Component;
  let fixture: ComponentFixture<Wis10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wis10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wis10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
