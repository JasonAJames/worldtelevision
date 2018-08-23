import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route : ActivatedRoute) {}

  ngOnInit() {
  }

stationName = 'World Television';
showtitle = "Hurricane Lane heading towards the Hawaiian islands";
desc = "Hurricane Lane has weakened slightly, but remains a Category 4 storm very close to the islands.";
footer = " For More... LIKE, FOLLOW & SHARE @SoCalTelevision on Facebook, Instagram & Twitter and watch www.WorldTelevision.tv";

}
