import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingNews1Component } from './breaking-news-1.component';

describe('BreakingNews1Component', () => {
  let component: BreakingNews1Component;
  let fixture: ComponentFixture<BreakingNews1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakingNews1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNews1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
