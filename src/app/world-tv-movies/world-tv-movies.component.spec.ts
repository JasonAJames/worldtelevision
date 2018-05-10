import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTvMoviesComponent } from './world-tv-movies.component';

describe('WorldTvMoviesComponent', () => {
  let component: WorldTvMoviesComponent;
  let fixture: ComponentFixture<WorldTvMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldTvMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldTvMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
