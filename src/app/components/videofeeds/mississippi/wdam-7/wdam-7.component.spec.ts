import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wdam7Component } from './wdam-7.component';

describe('Wdam7Component', () => {
  let component: Wdam7Component;
  let fixture: ComponentFixture<Wdam7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wdam7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wdam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
