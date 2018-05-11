import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-california-life',
  templateUrl: './california-life.component.html',
  styleUrls: ['./california-life.component.css']
})
export class CaliforniaLifeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "California Life"
  description = "California Life with Heather Dawson, a syndicated lifestyle news magazine show that airs across the entire state of California, focusing on the Best of California!..."

}
