import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indie-music-tv',
  templateUrl: './indie-music-tv.component.html',
  styleUrls: ['./indie-music-tv.component.css','../../app.component.css']
})
export class IndieMusicTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "IndiMusic TV"
  description = "IndiMusic TV is an online television station that is specialized in independent music. The headquarters is located in New York, NY."
}
