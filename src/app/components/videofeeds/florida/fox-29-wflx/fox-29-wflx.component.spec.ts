import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox29WflxComponent } from './fox-29-wflx.component';

describe('Fox29WflxComponent', () => {
  let component: Fox29WflxComponent;
  let fixture: ComponentFixture<Fox29WflxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox29WflxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox29WflxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
