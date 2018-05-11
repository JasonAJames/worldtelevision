import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noah-pop-tv',
  templateUrl: './noah-pop-tv.component.html',
  styleUrls: ['./noah-pop-tv.component.css']
})
export class NoahPopTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NoahPOP TV"
  description = "NoahPOPTV is a Multi-Channel Network with BroadbandTV. We bring you celebrity interviews & news along with exclusives."
}
