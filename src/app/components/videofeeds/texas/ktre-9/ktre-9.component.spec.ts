import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ktre9Component } from './ktre-9.component';

describe('Ktre9Component', () => {
  let component: Ktre9Component;
  let fixture: ComponentFixture<Ktre9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ktre9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ktre9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
