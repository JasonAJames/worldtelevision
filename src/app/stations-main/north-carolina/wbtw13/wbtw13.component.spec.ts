import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wbtw13Component } from './wbtw13.component';

describe('Wbtw13Component', () => {
  let component: Wbtw13Component;
  let fixture: ComponentFixture<Wbtw13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wbtw13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wbtw13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
