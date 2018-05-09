import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-media',
  templateUrl: './nasa-media.component.html',
  styleUrls: ['./nasa-media.component.css']
})
export class NasaMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NASA TV Media"
}
