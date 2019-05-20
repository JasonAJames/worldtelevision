import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorCookingComponent } from './outdoor-cooking.component';

describe('OutdoorCookingComponent', () => {
  let component: OutdoorCookingComponent;
  let fixture: ComponentFixture<OutdoorCookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorCookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorCookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
