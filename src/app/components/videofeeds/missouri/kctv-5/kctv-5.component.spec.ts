import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kctv5Component } from './kctv-5.component';

describe('Kctv5Component', () => {
  let component: Kctv5Component;
  let fixture: ComponentFixture<Kctv5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kctv5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kctv5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
