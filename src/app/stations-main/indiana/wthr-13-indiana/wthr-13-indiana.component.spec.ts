import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wthr13IndianaComponent } from './wthr-13-indiana.component';

describe('Wthr13IndianaComponent', () => {
  let component: Wthr13IndianaComponent;
  let fixture: ComponentFixture<Wthr13IndianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wthr13IndianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wthr13IndianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
