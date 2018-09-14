import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-france24live',
  templateUrl: './france24live.component.html',
  styleUrls: ['./france24live.component.css']
})
export class France24liveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "France 24 LIVE"
  description = "France 24 focuses on International and France News TV 24/7"
}
