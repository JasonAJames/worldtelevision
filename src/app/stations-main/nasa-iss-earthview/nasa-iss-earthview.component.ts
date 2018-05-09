import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-iss-earthview',
  templateUrl: './nasa-iss-earthview.component.html',
  styleUrls: ['./nasa-iss-earthview.component.css']
})
export class NasaIssEarthviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NASA ISS Earth View"
}
