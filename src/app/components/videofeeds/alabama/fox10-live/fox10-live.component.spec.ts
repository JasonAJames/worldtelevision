import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox10LiveVideoComponent } from './fox10-live.component';

describe('Fox10LiveComponent', () => {
  let component: Fox10LiveVideoComponent;
  let fixture: ComponentFixture<Fox10LiveVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox10LiveVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox10LiveVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
