import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wbtv3Component } from './wbtv-3.component';

describe('Wbtv3Component', () => {
  let component: Wbtv3Component;
  let fixture: ComponentFixture<Wbtv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wbtv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wbtv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
