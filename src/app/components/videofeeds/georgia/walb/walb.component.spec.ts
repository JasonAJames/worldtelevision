import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalbComponent } from './walb.component';

describe('WalbComponent', () => {
  let component: WalbComponent;
  let fixture: ComponentFixture<WalbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
