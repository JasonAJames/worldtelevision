import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneTvComponent } from './drone-tv.component';

describe('DroneTvComponent', () => {
  let component: DroneTvComponent;
  let fixture: ComponentFixture<DroneTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
