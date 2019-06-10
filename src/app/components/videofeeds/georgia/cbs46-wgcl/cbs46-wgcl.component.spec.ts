import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbs46WgclComponent } from './cbs46-wgcl.component';

describe('Cbs46WgclComponent', () => {
  let component: Cbs46WgclComponent;
  let fixture: ComponentFixture<Cbs46WgclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cbs46WgclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cbs46WgclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
