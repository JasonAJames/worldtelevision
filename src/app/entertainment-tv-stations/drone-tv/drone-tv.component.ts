import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drone-tv',
  templateUrl: './drone-tv.component.html',
  styleUrls: ['./drone-tv.component.css']
})
export class DroneTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Drone TV"
  description = "Drone TV, yep it’s a thing. An ‘in your face’ racing channel that puts you in the pilot seat at 80mph. Fly through dozens of POV, FPV in flight cameras and multiple..."

}
