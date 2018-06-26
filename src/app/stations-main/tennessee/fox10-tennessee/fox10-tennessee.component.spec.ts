import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox10TennesseeComponent } from './fox10-tennessee.component';

describe('Fox10TennesseeComponent', () => {
  let component: Fox10TennesseeComponent;
  let fixture: ComponentFixture<Fox10TennesseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox10TennesseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox10TennesseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
