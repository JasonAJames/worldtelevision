import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WccbComponent } from './wccb.component';

describe('WccbComponent', () => {
  let component: WccbComponent;
  let fixture: ComponentFixture<WccbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
