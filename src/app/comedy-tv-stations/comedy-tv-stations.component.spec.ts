import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyTvStationsComponent } from './comedy-tv-stations.component';

describe('ComedyTvStationsComponent', () => {
  let component: ComedyTvStationsComponent;
  let fixture: ComponentFixture<ComedyTvStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComedyTvStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComedyTvStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
