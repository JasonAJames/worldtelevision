import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedy-classics',
  templateUrl: './comedy-classics.component.html',
  styleUrls: ['./comedy-classics.component.css']
})
export class ComedyClassicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Comedy Classics"
  description = "If it's funny and if it's classic, you find find it here!"

}
