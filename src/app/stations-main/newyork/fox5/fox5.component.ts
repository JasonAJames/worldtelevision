import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox5',
  templateUrl: './fox5.component.html',
  styleUrls: ['./fox5.component.css','../../../app.component.css']
})
export class Fox5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Fox 5 NY"
  description = "Fox 5 New York"
}
