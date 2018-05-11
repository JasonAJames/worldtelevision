import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-the-mike',
  templateUrl: './on-the-mike.component.html',
  styleUrls: ['./on-the-mike.component.css']
})
export class OnTheMikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "On The Mike"
  description = "On The Mike' With Mike Sherman takes you deep inside today's pop culture, along with the hottest music artists, movie premiers and red carpet VIP events from the..."

}
