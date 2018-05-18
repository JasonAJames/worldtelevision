import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breaking-news-1',
  templateUrl: './breaking-news-1.component.html',
  styleUrls: ['./breaking-news-1.component.css']
})
export class BreakingNews1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "Breaking News Cubana de Aviacion Plane Crash"
  description = "The jet was reportedly operated by the state-run Cubana de Aviacion [Stock image] Getty";
  story = "A passenger plane with 104 people on board has crashed shortly after take off from Havana, Cuba's main airport. The aircraft from Jose Marti International Airport was bound for the eastern city of Holguin. It is believed to be a Boeing 737 on loan from an Italian carrier, Blue Panorama. State-run TV confirmed there were 104 people on board but there was no immediate indication of casualties. Flight CU972 was scheduled to depart at 11am local time (4pm BST) and land an hour and 20 minutes later. The jet came down close to Jose Marti International Airport with photos shared on social media showing a large plume of thick, black smoke rising from near the terminal buildings. Airport firefighters were said to be responding. While Cuba has had an accident-free run of nearly 18 years, in the last three years of the 20th century it suffered four fatal accidents. Cubana de Aviación, the national airline, has had a troubled history. As a result of the US economic embargo, it has been largely reliant on Russian and European aircraft. Maintenance of its relatively elderly fleet has been a constant challenge. Havana's airport, nine miles southwest of the capital, handles close to six million passengers a year."
}
