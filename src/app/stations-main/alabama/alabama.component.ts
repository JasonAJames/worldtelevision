import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alabama',
  templateUrl: './alabama.component.html',
  styleUrls: ['./alabama.component.css']
})
export class AlabamaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "Alabama"
  stationName1 = "FOX 6 WBRC"
  stationLink1 = "fox6-wbrc"
  stationName2 = "FOX 10 LIVE"
  stationLink2 = "fox10-live"
  stationName3 = "WAFF 48"
  stationLink3 = "waff-48"
  stationName4 = "WAKA 8"
  stationLink4 = "waka-8"
  stationName5 = "WHNT 19"
  stationLink5 = "whnt-19"
  stationName6 = "WSFA 12"
  stationLink6 = "wsfa-12"
}
