import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmgTvComponent } from './rmg-tv.component';

describe('RmgTvComponent', () => {
  let component: RmgTvComponent;
  let fixture: ComponentFixture<RmgTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmgTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmgTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
