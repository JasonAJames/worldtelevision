import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieMusicTvComponent } from './indie-music-tv.component';

describe('IndieMusicTvComponent', () => {
  let component: IndieMusicTvComponent;
  let fixture: ComponentFixture<IndieMusicTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndieMusicTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndieMusicTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
