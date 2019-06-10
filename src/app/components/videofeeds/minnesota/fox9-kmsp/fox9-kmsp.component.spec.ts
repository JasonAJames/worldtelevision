import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox9KmspComponent } from './fox9-kmsp.component';

describe('Fox9KmspComponent', () => {
  let component: Fox9KmspComponent;
  let fixture: ComponentFixture<Fox9KmspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox9KmspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox9KmspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
