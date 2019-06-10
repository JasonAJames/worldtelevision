import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox11LaComponent } from './fox11-la.component';

describe('Fox11LaComponent', () => {
  let component: Fox11LaComponent;
  let fixture: ComponentFixture<Fox11LaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox11LaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox11LaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
