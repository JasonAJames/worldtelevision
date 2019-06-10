import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KdioAbcComponent } from './kdio-abc.component';

describe('KdioAbcComponent', () => {
  let component: KdioAbcComponent;
  let fixture: ComponentFixture<KdioAbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdioAbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KdioAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
