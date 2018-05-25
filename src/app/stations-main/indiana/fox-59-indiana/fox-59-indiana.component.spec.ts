import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox59IndianaComponent } from './fox-59-indiana.component';

describe('Fox59IndianaComponent', () => {
  let component: Fox59IndianaComponent;
  let fixture: ComponentFixture<Fox59IndianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox59IndianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox59IndianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
