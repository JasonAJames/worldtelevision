import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox8ClevelandComponent } from './fox8-cleveland.component';

describe('Fox8ClevelandComponent', () => {
  let component: Fox8ClevelandComponent;
  let fixture: ComponentFixture<Fox8ClevelandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox8ClevelandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox8ClevelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
