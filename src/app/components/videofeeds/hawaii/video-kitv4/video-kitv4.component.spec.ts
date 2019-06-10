import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoKitv4Component } from './video-kitv4.component';

describe('VideoKitv4Component', () => {
  let component: VideoKitv4Component;
  let fixture: ComponentFixture<VideoKitv4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoKitv4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoKitv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
