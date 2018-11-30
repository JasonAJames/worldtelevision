import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-2',
  templateUrl: './live-2.component.html',
  styleUrls: ['./live-2.component.css']
})
export class Live2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  offlineMessage1 = "A 7.0 earthquake struck near Anchorage, Alaska this morning. Though a local TV station was knocked off the air,"


  stationName = 'WorldTelevision.tv LIVE feed 2'
  description = this.offlineMessage1
}
