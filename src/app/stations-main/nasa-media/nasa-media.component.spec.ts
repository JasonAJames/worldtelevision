import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaMediaComponent } from './nasa-media.component';

describe('NasaMediaComponent', () => {
  let component: NasaMediaComponent;
  let fixture: ComponentFixture<NasaMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
