import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Waff48Component } from './waff-48.component';

describe('Waff48Component', () => {
  let component: Waff48Component;
  let fixture: ComponentFixture<Waff48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Waff48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Waff48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
