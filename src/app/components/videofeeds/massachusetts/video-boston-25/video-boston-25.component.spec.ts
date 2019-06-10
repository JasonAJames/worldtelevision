import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBoston25Component } from './video-boston-25.component';

describe('VideoBoston25Component', () => {
  let component: VideoBoston25Component;
  let fixture: ComponentFixture<VideoBoston25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBoston25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBoston25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
