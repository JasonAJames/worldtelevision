import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoHd13Component } from './who-hd-13.component';

describe('WhoHd13Component', () => {
  let component: WhoHd13Component;
  let fixture: ComponentFixture<WhoHd13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoHd13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoHd13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
