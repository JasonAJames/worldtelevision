import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox4WdafComponent } from './fox4-wdaf.component';

describe('Fox4WdafComponent', () => {
  let component: Fox4WdafComponent;
  let fixture: ComponentFixture<Fox4WdafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox4WdafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox4WdafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
