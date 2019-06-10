import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wlox13AbcComponent } from './wlox-13-abc.component';

describe('Wlox13AbcComponent', () => {
  let component: Wlox13AbcComponent;
  let fixture: ComponentFixture<Wlox13AbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wlox13AbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wlox13AbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
