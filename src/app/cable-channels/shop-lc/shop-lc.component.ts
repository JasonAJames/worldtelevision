import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-lc',
  templateUrl: './shop-lc.component.html',
  styleUrls: ['./shop-lc.component.css','../../app.component.css']
})
export class ShopLcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Shop LC"
  description = "Shop LC, formerly known as Liquidation Channel, is an American shopping channel that specializes in selling jewelry. The headquarters is located in Austin, Texas."

}
