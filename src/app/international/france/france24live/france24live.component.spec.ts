import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { France24liveComponent } from './france24live.component';

describe('France24liveComponent', () => {
  let component: France24liveComponent;
  let fixture: ComponentFixture<France24liveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ France24liveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(France24liveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
