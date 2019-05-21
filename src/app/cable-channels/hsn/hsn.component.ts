import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsn',
  templateUrl: './hsn.component.html',
  styleUrls: ['./hsn.component.css']
})
export class HsnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "HSN"
  description = "Welcome to the Home Shopping Network"
}
