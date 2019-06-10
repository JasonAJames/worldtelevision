import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaNowComponent } from './california-now.component';

describe('CaliforniaNowComponent', () => {
  let component: CaliforniaNowComponent;
  let fixture: ComponentFixture<CaliforniaNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaliforniaNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniaNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
