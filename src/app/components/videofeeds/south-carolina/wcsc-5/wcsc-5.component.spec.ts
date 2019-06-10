import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcsc5Component } from './wcsc-5.component';

describe('Wcsc5Component', () => {
  let component: Wcsc5Component;
  let fixture: ComponentFixture<Wcsc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wcsc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wcsc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
