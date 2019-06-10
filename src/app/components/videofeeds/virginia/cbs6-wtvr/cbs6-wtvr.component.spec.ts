import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbs6WtvrComponent } from './cbs6-wtvr.component';

describe('Cbs6WtvrComponent', () => {
  let component: Cbs6WtvrComponent;
  let fixture: ComponentFixture<Cbs6WtvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cbs6WtvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cbs6WtvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
