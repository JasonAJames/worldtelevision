import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kwtx10Component } from './kwtx-10.component';

describe('Kwtx10Component', () => {
  let component: Kwtx10Component;
  let fixture: ComponentFixture<Kwtx10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kwtx10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kwtx10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
