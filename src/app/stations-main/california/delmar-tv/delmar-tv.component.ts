import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delmar-tv',
  templateUrl: './delmar-tv.component.html',
  styleUrls: ['./delmar-tv.component.css']
})
export class DelmarTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Del Mar TV"
  description = "Del Mar Television (DMTV) is a not-for-profit television station that broadcasts public, governmental and, educational programs serving residents living in Del Mar, California."

}
