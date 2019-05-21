import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsn-2',
  templateUrl: './hsn-2.component.html',
  styleUrls: ['./hsn-2.component.css','../../app.component.css']
})
export class Hsn2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "HSN 2"
  description = "Welcome to the Home Shopping Network 2"
}
