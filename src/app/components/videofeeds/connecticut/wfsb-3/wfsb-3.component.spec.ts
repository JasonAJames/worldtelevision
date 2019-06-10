import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfsb3Component } from './wfsb-3.component';

describe('Wfsb3Component', () => {
  let component: Wfsb3Component;
  let fixture: ComponentFixture<Wfsb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wfsb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wfsb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
