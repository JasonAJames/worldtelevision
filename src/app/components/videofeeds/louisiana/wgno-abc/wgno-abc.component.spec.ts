import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgnoAbcComponent } from './wgno-abc.component';

describe('WgnoAbcComponent', () => {
  let component: WgnoAbcComponent;
  let fixture: ComponentFixture<WgnoAbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgnoAbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgnoAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
