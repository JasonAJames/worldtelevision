import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt-news',
  templateUrl: './rt-news.component.html',
  styleUrls: ['./rt-news.component.css','../../app.component.css']
})
export class RtNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "RT News LIVE"
  description = "RT (Russia Today) is a global news network broadcasting from Moscow and Washington studios. RT is the first news channel to break the 1 billion YouTube views benchmark."

}
