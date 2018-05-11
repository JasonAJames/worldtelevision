import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-romance',
  templateUrl: './the-romance.component.html',
  styleUrls: ['./the-romance.component.css']
})
export class TheRomanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "The Romance"
  description = "The Romance TV Series follows the stories of 10 single men and 14 single women in San Diego, CA as they meet each other for the first time and go on dates in their..."

}
