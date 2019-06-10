import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kimt3Component } from './kimt-3.component';

describe('Kimt3Component', () => {
  let component: Kimt3Component;
  let fixture: ComponentFixture<Kimt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kimt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kimt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
