import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox10LiveComponent } from './fox10-live.component';

describe('Fox10LiveComponent', () => {
  let component: Fox10LiveComponent;
  let fixture: ComponentFixture<Fox10LiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox10LiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox10LiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
