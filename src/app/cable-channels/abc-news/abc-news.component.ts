import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-news',
  templateUrl: './abc-news.component.html',
  styleUrls: ['./abc-news.component.css']
})
export class AbcNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "ABC News"
  
}
