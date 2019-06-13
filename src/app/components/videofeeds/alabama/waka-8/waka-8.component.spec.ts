import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Waka8VideoComponent } from './waka-8.component';

describe('Waka8VideoComponent', () => {
  let component: Waka8VideoComponent;
  let fixture: ComponentFixture<Waka8VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Waka8VideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Waka8VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
