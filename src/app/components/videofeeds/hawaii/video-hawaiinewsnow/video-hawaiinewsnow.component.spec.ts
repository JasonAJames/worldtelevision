import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHawaiinewsnowComponent } from './video-hawaiinewsnow.component';

describe('VideoHawaiinewsnowComponent', () => {
  let component: VideoHawaiinewsnowComponent;
  let fixture: ComponentFixture<VideoHawaiinewsnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoHawaiinewsnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHawaiinewsnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
