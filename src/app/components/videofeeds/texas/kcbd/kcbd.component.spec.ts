import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcbdComponent } from './kcbd.component';

describe('KcbdComponent', () => {
  let component: KcbdComponent;
  let fixture: ComponentFixture<KcbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
