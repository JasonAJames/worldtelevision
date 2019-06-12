import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWbtw13Component } from './video-wbtw13.component';

describe('VideoWbtw13Component', () => {
  let component: VideoWbtw13Component;
  let fixture: ComponentFixture<VideoWbtw13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWbtw13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWbtw13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
