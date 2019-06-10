import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newschannel5Component } from './newschannel-5.component';

describe('Newschannel5Component', () => {
  let component: Newschannel5Component;
  let fixture: ComponentFixture<Newschannel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newschannel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newschannel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
