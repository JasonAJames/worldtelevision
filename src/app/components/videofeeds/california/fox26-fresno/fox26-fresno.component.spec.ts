import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox26FresnoComponent } from './fox26-fresno.component';

describe('Fox26FresnoComponent', () => {
  let component: Fox26FresnoComponent;
  let fixture: ComponentFixture<Fox26FresnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox26FresnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox26FresnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
