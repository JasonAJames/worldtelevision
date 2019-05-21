import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kfon-tv',
  templateUrl: './kfon-tv.component.html',
  styleUrls: ['./kfon-tv.component.css', '../../../app.component.css']
})
export class KfonTvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "KFON-TV (Fontana)"
  description = "KFON-TV is the city of Fontana's government access television station."
}
