import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-public',
  templateUrl: './nasa-public.component.html',
  styleUrls: ['./nasa-public.component.css']
})
export class NasaPublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NASA Public Education"
}
