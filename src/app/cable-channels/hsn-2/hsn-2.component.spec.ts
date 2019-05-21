import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsn2Component } from './hsn-2.component';

describe('Hsn2Component', () => {
  let component: Hsn2Component;
  let fixture: ComponentFixture<Hsn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hsn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hsn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
