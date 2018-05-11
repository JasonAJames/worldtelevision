import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeForAnEyeComponent } from './eye-for-an-eye.component';

describe('EyeForAnEyeComponent', () => {
  let component: EyeForAnEyeComponent;
  let fixture: ComponentFixture<EyeForAnEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeForAnEyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeForAnEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
