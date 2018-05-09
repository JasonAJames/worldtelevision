import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaIssEarthviewComponent } from './nasa-iss-earthview.component';

describe('NasaIssEarthviewComponent', () => {
  let component: NasaIssEarthviewComponent;
  let fixture: ComponentFixture<NasaIssEarthviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaIssEarthviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaIssEarthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
