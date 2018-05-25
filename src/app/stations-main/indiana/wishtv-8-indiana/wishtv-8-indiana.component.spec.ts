import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishtv8IndianaComponent } from './wishtv-8-indiana.component';

describe('Wishtv8IndianaComponent', () => {
  let component: Wishtv8IndianaComponent;
  let fixture: ComponentFixture<Wishtv8IndianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wishtv8IndianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wishtv8IndianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
