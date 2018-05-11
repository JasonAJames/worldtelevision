import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomorrow-pictures',
  templateUrl: './tomorrow-pictures.component.html',
  styleUrls: ['./tomorrow-pictures.component.css']
})
export class TomorrowPicturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Tomorrow Pictures"
  description = "Channel-oriented Articles, Videos, Infotainment from Tomorrow Pictures."

}
