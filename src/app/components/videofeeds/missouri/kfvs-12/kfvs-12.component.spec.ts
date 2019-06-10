import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kfvs12Component } from './kfvs-12.component';

describe('Kfvs12Component', () => {
  let component: Kfvs12Component;
  let fixture: ComponentFixture<Kfvs12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kfvs12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kfvs12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
