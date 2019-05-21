import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnowTvComponent } from './rightnow-tv.component';

describe('RightnowTvComponent', () => {
  let component: RightnowTvComponent;
  let fixture: ComponentFixture<RightnowTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightnowTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightnowTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
