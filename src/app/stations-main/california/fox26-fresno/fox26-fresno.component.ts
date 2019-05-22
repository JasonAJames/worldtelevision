import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox26-fresno',
  templateUrl: './fox26-fresno.component.html',
  styleUrls: ['./fox26-fresno.component.css', '../../../app.component.css']
})
export class Fox26FresnoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "FOX 26 Fresno"
  description = "KMPH-TV (Fox 26) is a Fox-affiliated television station based in Fresno, California."
}
