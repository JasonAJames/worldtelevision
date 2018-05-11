import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentTvStationsComponent } from './entertainment-tv-stations.component';

describe('EntertainmentTvStationsComponent', () => {
  let component: EntertainmentTvStationsComponent;
  let fixture: ComponentFixture<EntertainmentTvStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentTvStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentTvStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
