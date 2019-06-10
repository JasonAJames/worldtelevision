import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ktvk3Component } from './ktvk-3.component';

describe('Ktvk3Component', () => {
  let component: Ktvk3Component;
  let fixture: ComponentFixture<Ktvk3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ktvk3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ktvk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
