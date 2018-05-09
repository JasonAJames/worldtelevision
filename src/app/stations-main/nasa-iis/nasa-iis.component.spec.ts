import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaIisComponent } from './nasa-iis.component';

describe('NasaIisComponent', () => {
  let component: NasaIisComponent;
  let fixture: ComponentFixture<NasaIisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaIisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaIisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
