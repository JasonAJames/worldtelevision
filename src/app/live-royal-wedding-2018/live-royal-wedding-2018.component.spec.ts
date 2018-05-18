import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveRoyalWedding2018Component } from './live-royal-wedding-2018.component';

describe('LiveRoyalWedding2018Component', () => {
  let component: LiveRoyalWedding2018Component;
  let fixture: ComponentFixture<LiveRoyalWedding2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveRoyalWedding2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveRoyalWedding2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
