import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-iis',
  templateUrl: './nasa-iis.component.html',
  styleUrls: ['./nasa-iis.component.css','../../app.component.css']
})
export class NasaIisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "NASA International Space Station (ISS)"
  description = "LIVE View of Earth from the International Space Station (ISS). The network also provides an array of live programming, such as coverage of missions, events (spacewalks, media interviews, educational broadcasts), press conferences and rocket launches.  In the United States, NASA Television's Public and Media channels are MPEG-2 digital C-band signals carried by QPSK/DVB-S modulation on satellite AMC-3, transponder 15C, at 87 degrees west longitude. Downlink frequency is 4000 MHz, horizontal polarization, with a data rate of 38.86 Mhz, symbol rate of 28.1115 Ms/s, and ¾ FEC. A Digital Video Broadcast (DVB) compliant Integrated Receiver Decoder (IRD) is needed for reception."
}
