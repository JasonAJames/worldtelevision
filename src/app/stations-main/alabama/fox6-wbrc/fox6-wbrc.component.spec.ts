import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox6WbrcComponent } from './fox6-wbrc.component';

describe('Fox6WbrcComponent', () => {
  let component: Fox6WbrcComponent;
  let fixture: ComponentFixture<Fox6WbrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox6WbrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox6WbrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
