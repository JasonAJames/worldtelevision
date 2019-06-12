import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wsfa12Component } from './wsfa-12.component';

describe('Wsfa12Component', () => {
  let component: Wsfa12Component;
  let fixture: ComponentFixture<Wsfa12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wsfa12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wsfa12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
