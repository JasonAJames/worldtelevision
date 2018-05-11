import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheMikeComponent } from './on-the-mike.component';

describe('OnTheMikeComponent', () => {
  let component: OnTheMikeComponent;
  let fixture: ComponentFixture<OnTheMikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheMikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheMikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
