import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khsl-tv',
  templateUrl: './khsl-tv.component.html',
  styleUrls: ['./khsl-tv.component.css']
})
export class KhslTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "KHSL-TV (Action News Now / CBS 12)"
  description = "KHSL-TV (Action News Now / CBS 12) is a CBS-affiliated television station serving Chico and Redding, CA. It is licensed to Chico. The channel broadcasts local news, weather information, sports news, and more."
}
