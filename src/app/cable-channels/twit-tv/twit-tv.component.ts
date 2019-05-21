import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twit-tv',
  templateUrl: './twit-tv.component.html',
  styleUrls: ['./twit-tv.component.css','../../app.component.css']
})
export class TwitTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Twit TV"
}
