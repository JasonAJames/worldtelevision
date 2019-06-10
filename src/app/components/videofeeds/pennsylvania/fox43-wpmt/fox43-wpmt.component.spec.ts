import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox43WpmtComponent } from './fox43-wpmt.component';

describe('Fox43WpmtComponent', () => {
  let component: Fox43WpmtComponent;
  let fixture: ComponentFixture<Fox43WpmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox43WpmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox43WpmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
