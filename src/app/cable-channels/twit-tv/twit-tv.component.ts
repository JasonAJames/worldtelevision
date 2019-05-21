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
  stationName = "TWiT TV"
  description = "TWiT.tv (TWiT Netcast Network) is an online television station that broadcasts technology news, commentary, reviews, and perspective on the latest trends in digital tech. The headquarters is located in Petaluma, California."
}
