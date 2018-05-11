import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-placeholders',
  templateUrl: './the-placeholders.component.html',
  styleUrls: ['./the-placeholders.component.css']
})
export class ThePlaceholdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stationName = "The Placeholders"
  description = "Comedy series from Upstart Filmworks. Based on true stories from public access, our film careers, and constantly dealing with a bunch of a-holes in our daily lives..."

}
