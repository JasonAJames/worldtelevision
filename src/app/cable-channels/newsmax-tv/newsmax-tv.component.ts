import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsmax-tv',
  templateUrl: './newsmax-tv.component.html',
  styleUrls: ['./newsmax-tv.component.css','../../app.component.css']
})
export class NewsmaxTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NewsMax TV"
  description = "Newsmax TV is a cable and satellite news channel that features a conservative point of view about the news. It is owned by Newsmax Media, based in West Palm Beach, Florida. Live streaming and on-demand videos can be viewed online."
}
