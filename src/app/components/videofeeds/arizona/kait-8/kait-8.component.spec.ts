import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kait8Component } from './kait-8.component';

describe('Kait8Component', () => {
  let component: Kait8Component;
  let fixture: ComponentFixture<Kait8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kait8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kait8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
