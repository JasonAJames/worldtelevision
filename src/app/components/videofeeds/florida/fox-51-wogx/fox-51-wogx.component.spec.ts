import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox51WogxComponent } from './fox-51-wogx.component';

describe('Fox51WogxComponent', () => {
  let component: Fox51WogxComponent;
  let fixture: ComponentFixture<Fox51WogxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox51WogxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox51WogxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
