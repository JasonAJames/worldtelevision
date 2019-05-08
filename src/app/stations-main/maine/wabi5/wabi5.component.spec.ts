import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wabi5Component } from './wabi5.component';

describe('Wabi5Component', () => {
  let component: Wabi5Component;
  let fixture: ComponentFixture<Wabi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wabi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wabi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
