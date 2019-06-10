import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox5KswbComponent } from './fox5-kswb.component';

describe('Fox5KswbComponent', () => {
  let component: Fox5KswbComponent;
  let fixture: ComponentFixture<Fox5KswbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox5KswbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox5KswbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
