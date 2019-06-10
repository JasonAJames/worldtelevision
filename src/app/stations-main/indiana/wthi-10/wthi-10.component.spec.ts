import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wthi10Component } from './wthi-10.component';

describe('Wthi10Component', () => {
  let component: Wthi10Component;
  let fixture: ComponentFixture<Wthi10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wthi10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wthi10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
