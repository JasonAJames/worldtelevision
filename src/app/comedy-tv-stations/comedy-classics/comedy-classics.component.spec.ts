import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyClassicsComponent } from './comedy-classics.component';

describe('ComedyClassicsComponent', () => {
  let component: ComedyClassicsComponent;
  let fixture: ComponentFixture<ComedyClassicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyClassicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyClassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
