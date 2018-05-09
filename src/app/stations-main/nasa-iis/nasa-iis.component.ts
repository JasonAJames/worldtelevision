import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-iis',
  templateUrl: './nasa-iis.component.html',
  styleUrls: ['./nasa-iis.component.css']
})
export class NasaIisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NASA International Space Station (ISS)"
}
