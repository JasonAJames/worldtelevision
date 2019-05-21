import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ditty-tv',
  templateUrl: './ditty-tv.component.html',
  styleUrls: ['./ditty-tv.component.css','../../app.component.css']
})
export class DittyTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Ditty TV"
  description = "Ditty TV is a cable television network that specializes in Americana and Roots style music. The channel broadcasts music videos, live concerts, artist interviews, festival coverage, documentaries, and other 'Americana'-themed programs. It is based in Memphis, Tennessee."
}
