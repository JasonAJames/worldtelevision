import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tf1',
  templateUrl: './tf1.component.html',
  styleUrls: ['./tf1.component.css']
})
export class Tf1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "TF1"
  description = "TF1 is a private national French TV channel, controlled by TF1 Group, whose major share-holder is Bouygues. TF1s average market share of 24% makes it the most popular domestic network. Its also considered to be the most viewed television channel in Europe. Flagship series include CSI, The Voice and House M.D."
}
