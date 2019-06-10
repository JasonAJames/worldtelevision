import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whnt19Component } from './whnt-19.component';

describe('Whnt19Component', () => {
  let component: Whnt19Component;
  let fixture: ComponentFixture<Whnt19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whnt19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whnt19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
