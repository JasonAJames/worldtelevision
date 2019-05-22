import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyma',
  templateUrl: './kyma.component.html',
  styleUrls: ['./kyma.component.css','../../../app.component.css']
})
export class KymaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "KYMA - NBC 11"
  description = "KYMA is an NBC-affiliated television station serving Yuma (Arizona) and El Centro (California). It is licensed to Yuma. It is a sister to CBS affiliate KSWT (Yuma, AZ) and Fox affiliate KECY-TV (El Centro, CA)."
}
