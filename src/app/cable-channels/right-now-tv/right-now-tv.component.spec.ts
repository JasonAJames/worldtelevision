import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNowTvComponent } from './right-now-tv.component';

describe('RightNowTvComponent', () => {
  let component: RightNowTvComponent;
  let fixture: ComponentFixture<RightNowTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNowTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNowTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
