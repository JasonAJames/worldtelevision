import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css', '../../app.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  offlineMessage1 = "A 7.0 earthquake struck near Anchorage, Alaska this morning. Though a local TV station was knocked off the air,"


  stationName = 'WorldTelevision.tv LIVE'
  description = this.offlineMessage1
}
