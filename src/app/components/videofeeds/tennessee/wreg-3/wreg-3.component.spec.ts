import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wreg3Component } from './wreg-3.component';

describe('Wreg3Component', () => {
  let component: Wreg3Component;
  let fixture: ComponentFixture<Wreg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wreg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wreg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
