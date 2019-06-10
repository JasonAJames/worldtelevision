import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Woodtv8Component } from './woodtv-8.component';

describe('Woodtv8Component', () => {
  let component: Woodtv8Component;
  let fixture: ComponentFixture<Woodtv8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Woodtv8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Woodtv8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
