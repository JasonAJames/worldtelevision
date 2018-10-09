import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsbTv2Component } from './wsb-tv2.component';

describe('WsbTv2Component', () => {
  let component: WsbTv2Component;
  let fixture: ComponentFixture<WsbTv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsbTv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsbTv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
