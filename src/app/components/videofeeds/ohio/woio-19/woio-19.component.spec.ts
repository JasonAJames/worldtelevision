import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Woio19Component } from './woio-19.component';

describe('Woio19Component', () => {
  let component: Woio19Component;
  let fixture: ComponentFixture<Woio19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Woio19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Woio19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
