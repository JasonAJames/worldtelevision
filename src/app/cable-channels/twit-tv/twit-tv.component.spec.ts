import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitTvComponent } from './twit-tv.component';

describe('TwitTvComponent', () => {
  let component: TwitTvComponent;
  let fixture: ComponentFixture<TwitTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
