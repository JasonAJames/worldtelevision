import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Waff48VideoComponent } from './waff-48.component';

describe('Waff48VideoComponent', () => {
  let component: Waff48VideoComponent;
  let fixture: ComponentFixture<Waff48VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Waff48VideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Waff48VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
