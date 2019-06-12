import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Waka8Component } from './waka-8.component';

describe('Waka8Component', () => {
  let component: Waka8Component;
  let fixture: ComponentFixture<Waka8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Waka8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Waka8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
