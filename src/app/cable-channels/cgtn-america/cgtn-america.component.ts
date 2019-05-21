import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgtn-america',
  templateUrl: './cgtn-america.component.html',
  styleUrls: ['./cgtn-america.component.css']
})
export class CgtnAmericaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "CGTN America"
  description = "CGTN America, formerly known as CCTV America, is an English-language news channel run by Chinese state broadcaster China Central Television (CCTV). The headquarters is located in Washington, D.C.."
}
