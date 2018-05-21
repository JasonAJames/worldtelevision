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
  description = "Hawaiian Volcano Observatory continues to monitor active flows. Two lava flows have entered the ocean off Highway 137 near MacKenzie State Park. Moderate trade winds continue to cause elevated levels of sulfur dioxide in areas downwind of the vents, including Kamaili, Seaview, and Malama Ki. Take action necessary to limit further exposure. Due to hazardous conditions from lava and fires, the following policies are in effect: Highway 137 is closed to all traffic between Kamaili Road and Pohoiki Road. Kamaili Road is closed to all thru traffic. No stopping, this is a high sulfur dioxide area. Everyone is asked to stay out of the area. Due to the lava entry at the ocean, the following policies are in effect: Access to the area is prohibited due to the laze hazard. Stay away from any ocean plume. The plume travels with the wind and can change direction without warning. The U.S. Coast Guard is actively monitoring the area. Only permitted tour boats are allowed in the area.<br/>An eruption community information meeting will be held at the Pahoa High cafeteria on Tuesday, May 22 at 5:30 in the evening. The residents of lower Puna are going through a very difficult time. We ask for your help by avoiding the affected areas."
}
