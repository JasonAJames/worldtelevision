import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianaComponent } from './indiana.component';

describe('IndianaComponent', () => {
  let component: IndianaComponent;
  let fixture: ComponentFixture<IndianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
