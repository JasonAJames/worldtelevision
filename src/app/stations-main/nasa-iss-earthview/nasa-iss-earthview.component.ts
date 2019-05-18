import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-iss-earthview',
  templateUrl: './nasa-iss-earthview.component.html',
  styleUrls: ['./nasa-iss-earthview.component.css','../../app.component.css']
})
export class NasaIssEarthviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NASA ISS Earth View"
  description = "Behold, the Earth! See live views of Earth from the International Space Station coming to you by NASA's High Definition Earth Viewing (HDEV) experiment.  While the experiment is operational, views will typically sequence through the different cameras. If you are seeing a black image, the Space Station is on the night side of the Earth. If you are seeing an image with text displayed, the communications are switching between satellites and camera feeds are temporarily unavailable. Between camera switches, a black & gray slate will also briefly appear.  The experiment was activated on April 30, 2014 and is mounted on the External Payload Facility of the European Space Agency’s Columbus module. This experiment includes several commercial HD video cameras aimed at the Earth which are enclosed in a pressurized and temperature controlled housing. To learn more about the HDEV experiment, visit: https://eol.jsc.nasa.gov/ESRS/HDEV/  Please note: The HDEV cycling of the cameras will sometimes be halted, causing the video to only show select camera feeds. This is handled by the HDEV team, and is only scheduled on a temporary basis. Nominal video will resume once the team has finished their scheduled event."
}
