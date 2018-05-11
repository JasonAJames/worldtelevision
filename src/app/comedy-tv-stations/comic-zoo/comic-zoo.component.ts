import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-zoo',
  templateUrl: './comic-zoo.component.html',
  styleUrls: ['./comic-zoo.component.css']
})
export class ComicZooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "comiCZoo"
  description = "Cool cult comedy from Leomark Studios."

}
