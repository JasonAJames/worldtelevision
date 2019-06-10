import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox2KtviComponent } from './fox2-ktvi.component';

describe('Fox2KtviComponent', () => {
  let component: Fox2KtviComponent;
  let fixture: ComponentFixture<Fox2KtviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox2KtviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox2KtviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
