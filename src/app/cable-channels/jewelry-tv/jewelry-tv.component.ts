import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewelry-tv',
  templateUrl: './jewelry-tv.component.html',
  styleUrls: ['./jewelry-tv.component.css','../../app.component.css']
})
export class JewelryTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Jewelry TV"
  description = "JTV (Jewelry Television®) is one of the largest jewelry retailers in the United States, supporting over 1,400 jobs on its 16-acre Knoxville campus. With a proven 25-year history, JTV leverages an omni-digital strategy designed to elevate the customer experience through holistic, digitally-driven touch points, including live TV programming, 24 hours a day, seven days a week to 84 million U.S. households, an industry leading mobile optimized e-commerce platform, and a robust and engaging social media presence."

}
