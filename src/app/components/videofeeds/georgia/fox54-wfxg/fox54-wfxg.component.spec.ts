import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fox54WfxgComponent } from './fox54-wfxg.component';

describe('Fox54WfxgComponent', () => {
  let component: Fox54WfxgComponent;
  let fixture: ComponentFixture<Fox54WfxgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fox54WfxgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fox54WfxgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
