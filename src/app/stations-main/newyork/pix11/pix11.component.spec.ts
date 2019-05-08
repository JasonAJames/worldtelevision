import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pix11Component } from './pix11.component';

describe('Pix11Component', () => {
  let component: Pix11Component;
  let fixture: ComponentFixture<Pix11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pix11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pix11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
