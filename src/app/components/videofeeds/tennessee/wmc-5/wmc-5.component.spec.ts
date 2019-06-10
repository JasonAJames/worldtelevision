import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wmc5Component } from './wmc-5.component';

describe('Wmc5Component', () => {
  let component: Wmc5Component;
  let fixture: ComponentFixture<Wmc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wmc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wmc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
