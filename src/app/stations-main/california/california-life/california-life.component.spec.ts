import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaLifeComponent } from './california-life.component';

describe('CaliforniaLifeComponent', () => {
  let component: CaliforniaLifeComponent;
  let fixture: ComponentFixture<CaliforniaLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaliforniaLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniaLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
