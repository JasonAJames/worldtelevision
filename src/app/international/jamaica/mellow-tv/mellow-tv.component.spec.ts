import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MellowTvComponent } from './mellow-tv.component';

describe('MellowTvComponent', () => {
  let component: MellowTvComponent;
  let fixture: ComponentFixture<MellowTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MellowTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MellowTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
