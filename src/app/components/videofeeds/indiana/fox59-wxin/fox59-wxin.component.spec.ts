import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox59WxinComponent } from './fox59-wxin.component';

describe('Fox59WxinComponent', () => {
  let component: Fox59WxinComponent;
  let fixture: ComponentFixture<Fox59WxinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox59WxinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox59WxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
