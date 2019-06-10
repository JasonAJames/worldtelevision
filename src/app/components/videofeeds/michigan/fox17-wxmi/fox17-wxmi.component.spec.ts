import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox17WxmiComponent } from './fox17-wxmi.component';

describe('Fox17WxmiComponent', () => {
  let component: Fox17WxmiComponent;
  let fixture: ComponentFixture<Fox17WxmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox17WxmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox17WxmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
