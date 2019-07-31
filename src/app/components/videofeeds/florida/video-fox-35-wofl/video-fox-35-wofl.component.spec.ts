import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFox35WoflComponent } from './video-fox-35-wofl.component';

describe('VideoFox35WoflComponent', () => {
  let component: VideoFox35WoflComponent;
  let fixture: ComponentFixture<VideoFox35WoflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFox35WoflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFox35WoflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
