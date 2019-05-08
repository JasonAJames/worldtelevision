import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox13saltlakeComponent } from './fox13saltlake.component';

describe('Fox13saltlakeComponent', () => {
  let component: Fox13saltlakeComponent;
  let fixture: ComponentFixture<Fox13saltlakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox13saltlakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox13saltlakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
