import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPublicComponent } from './nasa-public.component';

describe('NasaPublicComponent', () => {
  let component: NasaPublicComponent;
  let fixture: ComponentFixture<NasaPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
