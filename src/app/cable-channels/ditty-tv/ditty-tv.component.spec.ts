import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DittyTvComponent } from './ditty-tv.component';

describe('DittyTvComponent', () => {
  let component: DittyTvComponent;
  let fixture: ComponentFixture<DittyTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DittyTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DittyTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
