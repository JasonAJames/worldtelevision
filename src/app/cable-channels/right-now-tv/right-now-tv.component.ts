import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-now-tv',
  templateUrl: './right-now-tv.component.html',
  styleUrls: ['./right-now-tv.component.css','../../app.component.css']
})
export class RightNowTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "RightNow TV"
  description = "Right Now TV is a sports and entertainment television channel headquartered in Atlanta, Georgia. It broadcasts various programming with a mixture of combat sports (wrestling, boxing, MMA), music (music videos, concerts), talk shows, health, fitness, automotive programs, documentaries, and educational & informational children's programs."
}
