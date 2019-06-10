import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-news',
  templateUrl: './wink-news.component.html',
  styleUrls: ['./wink-news.component.css']
})
export class WinkNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "WINK News"
}
