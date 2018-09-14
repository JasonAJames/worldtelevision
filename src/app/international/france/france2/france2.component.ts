import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-france2',
  templateUrl: './france2.component.html',
  styleUrls: ['./france2.component.css']
})
export class France2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "France 2"
  description = "France 2 is a French public national television channel. It is part of the state-owned France Télévisions group, along with France 3, France 4, France 5 and France Ô. France Télévisions also participates in ARTE, EuroNews, several cable/satellite thematic channels, and Mediamétrie."
}
