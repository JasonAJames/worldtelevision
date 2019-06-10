import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wpix11Component } from './wpix-11.component';

describe('Wpix11Component', () => {
  let component: Wpix11Component;
  let fixture: ComponentFixture<Wpix11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wpix11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wpix11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
