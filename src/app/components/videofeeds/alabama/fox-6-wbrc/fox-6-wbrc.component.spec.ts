import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox6VideoWbrcComponent } from './fox-6-wbrc.component';

describe('Fox6WbrcComponent', () => {
  let component: Fox6VideoWbrcComponent;
  let fixture: ComponentFixture<Fox6VideoWbrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox6VideoWbrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox6VideoWbrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
