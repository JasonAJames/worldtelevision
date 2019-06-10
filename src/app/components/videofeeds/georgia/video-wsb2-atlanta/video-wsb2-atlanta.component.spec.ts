import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWsb2AtlantaComponent } from './video-wsb2-atlanta.component';

describe('VideoWsb2AtlantaComponent', () => {
  let component: VideoWsb2AtlantaComponent;
  let fixture: ComponentFixture<VideoWsb2AtlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWsb2AtlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWsb2AtlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
