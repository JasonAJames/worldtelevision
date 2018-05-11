import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-directors-cut',
  templateUrl: './the-directors-cut.component.html',
  styleUrls: ['./the-directors-cut.component.css']
})
export class TheDirectorsCutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "The Dirtectors Cut"
  description = "Looking for an inside track on what's happening at the box office? Award winning filmmaker Peter Nicholas is breaking down all the latest movies hitting the big..."

}
