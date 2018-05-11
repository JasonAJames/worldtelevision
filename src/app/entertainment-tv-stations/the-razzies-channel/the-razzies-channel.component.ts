import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-razzies-channel',
  templateUrl: './the-razzies-channel.component.html',
  styleUrls: ['./the-razzies-channel.component.css']
})
export class TheRazziesChannelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "The Razzies Channel"
  description = "The $4.97 gold spray-painted Razzie® Award is handed out to otherwise great talent who should know better than to associate their name with sub-par projects. Every..."
}
