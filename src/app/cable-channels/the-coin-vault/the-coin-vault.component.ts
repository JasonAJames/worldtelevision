import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-coin-vault',
  templateUrl: './the-coin-vault.component.html',
  styleUrls: ['./the-coin-vault.component.css','../../app.component.css']
})
export class TheCoinVaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "the Coin Vault"
  description = "Now in our 30th year on the air, we have developed a reputation for bringing you quality coins and collectibles at affordable prices, with the best customer service in the TV shopping industry. Unlike our bigger competitors, The Coin Vault specializes in providing a one-on-one service to collectors. Our ultimate goal is your complete satisfaction and we thank you for the opportunity to serve you throughout our first three decades."

}
