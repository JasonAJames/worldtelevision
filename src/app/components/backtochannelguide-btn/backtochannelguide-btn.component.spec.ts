import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktochannelguideBtnComponent } from './backtochannelguide-btn.component';

describe('BacktochannelguideBtnComponent', () => {
  let component: BacktochannelguideBtnComponent;
  let fixture: ComponentFixture<BacktochannelguideBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktochannelguideBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktochannelguideBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
