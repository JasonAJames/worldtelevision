import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoNbc11NewsComponent } from './video-nbc11-news.component';

describe('VideoNbc11NewsComponent', () => {
  let component: VideoNbc11NewsComponent;
  let fixture: ComponentFixture<VideoNbc11NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoNbc11NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoNbc11NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
