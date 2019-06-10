import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox2WjbkComponent } from './fox2-wjbk.component';

describe('Fox2WjbkComponent', () => {
  let component: Fox2WjbkComponent;
  let fixture: ComponentFixture<Fox2WjbkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox2WjbkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox2WjbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
