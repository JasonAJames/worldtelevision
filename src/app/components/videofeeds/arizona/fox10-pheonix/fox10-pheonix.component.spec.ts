import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox10PheonixComponent } from './fox10-pheonix.component';

describe('Fox10PheonixComponent', () => {
  let component: Fox10PheonixComponent;
  let fixture: ComponentFixture<Fox10PheonixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox10PheonixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox10PheonixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
