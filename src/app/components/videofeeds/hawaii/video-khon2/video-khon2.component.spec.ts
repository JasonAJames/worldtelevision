import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoKhon2Component } from './video-khon2.component';

describe('VideoKhon2Component', () => {
  let component: VideoKhon2Component;
  let fixture: ComponentFixture<VideoKhon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoKhon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoKhon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
