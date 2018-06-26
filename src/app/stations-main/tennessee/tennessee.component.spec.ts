import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennesseeComponent } from './tennessee.component';

describe('TennesseeComponent', () => {
  let component: TennesseeComponent;
  let fixture: ComponentFixture<TennesseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennesseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennesseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
