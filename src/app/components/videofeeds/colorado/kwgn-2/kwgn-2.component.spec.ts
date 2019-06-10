import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kwgn2Component } from './kwgn-2.component';

describe('Kwgn2Component', () => {
  let component: Kwgn2Component;
  let fixture: ComponentFixture<Kwgn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kwgn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kwgn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
