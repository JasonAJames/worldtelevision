import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volcano-live',
  templateUrl: './volcano-live.component.html',
  styleUrls: ['./volcano-live.component.css']
})
export class VolcanoLiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Kilauea Volcano LIVE"
  description = "Live Video: Fast Moving Lava Continues To Move Through Puna, Hawaii. #Kilauea"
}
