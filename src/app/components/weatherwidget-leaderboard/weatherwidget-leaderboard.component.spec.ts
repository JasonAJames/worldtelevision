import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherwidgetLeaderboardComponent } from './weatherwidget-leaderboard.component';

describe('WeatherwidgetLeaderboardComponent', () => {
  let component: WeatherwidgetLeaderboardComponent;
  let fixture: ComponentFixture<WeatherwidgetLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherwidgetLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherwidgetLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
