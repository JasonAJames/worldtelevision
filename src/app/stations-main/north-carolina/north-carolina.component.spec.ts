import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthCarolinaComponent } from './north-carolina.component';

describe('NorthCarolinaComponent', () => {
  let component: NorthCarolinaComponent;
  let fixture: ComponentFixture<NorthCarolinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthCarolinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthCarolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
