import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KphoCbs5Component } from './kpho-cbs5.component';

describe('KphoCbs5Component', () => {
  let component: KphoCbs5Component;
  let fixture: ComponentFixture<KphoCbs5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KphoCbs5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KphoCbs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
