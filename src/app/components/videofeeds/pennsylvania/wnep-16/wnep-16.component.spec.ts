import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wnep16Component } from './wnep-16.component';

describe('Wnep16Component', () => {
  let component: Wnep16Component;
  let fixture: ComponentFixture<Wnep16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wnep16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wnep16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
