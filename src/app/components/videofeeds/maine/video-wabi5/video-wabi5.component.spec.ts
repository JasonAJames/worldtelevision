import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWabi5Component } from './video-wabi5.component';

describe('VideoWabi5Component', () => {
  let component: VideoWabi5Component;
  let fixture: ComponentFixture<VideoWabi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWabi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWabi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
