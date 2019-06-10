import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWsbtv2Component } from './video-wsbtv-2.component';

describe('VideoWsbtv2Component', () => {
  let component: VideoWsbtv2Component;
  let fixture: ComponentFixture<VideoWsbtv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWsbtv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWsbtv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
