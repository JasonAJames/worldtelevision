import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volcano-live',
  templateUrl: './volcano-live.component.html',
  styleUrls: ['./volcano-live.component.css']
})
export class VolcanoLiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Kilauea Volcano LIVE"
  description = "Hawaiian Volcano Observatory reports that an explosive eruption at Kilauea summit has occurred at 5:51 PM.  The resulting ash plume may affect surrounding areas."
  description2 = "Hawaiian Volcano Observatory reports that eruptive lava activity at multiple fissures continues with one flow entering the ocean.  Fissure 22 continues to produce most of the lava feeding the flows."
  description3 = "Lava from Fissure 22 has crossed onto the Puna Geothermal Venture property.  County, state, and federal partners have been collaborating closely to monitor the situation and work with PGV to ensure the safety of the surrounding communities.  Ten of the eleven wells have been quenched.  Efforts are ongoing to make sure the site is secure and the community is kept safe."
}
