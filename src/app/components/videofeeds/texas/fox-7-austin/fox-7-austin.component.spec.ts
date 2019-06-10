import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox7AustinComponent } from './fox-7-austin.component';

describe('Fox7AustinComponent', () => {
  let component: Fox7AustinComponent;
  let fixture: ComponentFixture<Fox7AustinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox7AustinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox7AustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
