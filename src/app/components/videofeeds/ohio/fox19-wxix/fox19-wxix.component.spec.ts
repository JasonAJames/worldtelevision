import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox19WxixComponent } from './fox19-wxix.component';

describe('Fox19WxixComponent', () => {
  let component: Fox19WxixComponent;
  let fixture: ComponentFixture<Fox19WxixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox19WxixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox19WxixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
