import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth, private _route : ActivatedRoute) {}

  ngOnInit() {
  }

stationName = 'World Television';
description = "Live Video: Kilauea Lava Flow Activity In Lower Puna Hawaii"

}
