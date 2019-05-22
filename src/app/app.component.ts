import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import { filter } from 'rxjs/operators';
import { logging } from 'selenium-webdriver';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  './bower_components/semantic/dist/components/reset.css',
  './bower_components/semantic/dist/components/site.css',
  './bower_components/semantic/dist/components/container.css',
  './bower_components/semantic/dist/components/grid.css',
  './bower_components/semantic/dist/components/header.css',
  './bower_components/semantic/dist/components/image.css',
  './bower_components/semantic/dist/components/menu.css',
  './bower_components/semantic/dist/components/divider.css',
  './bower_components/semantic/dist/components/dropdown.css',
  './bower_components/semantic/dist/components/segment.css',
  './bower_components/semantic/dist/components/button.css',
  './bower_components/semantic/dist/components/list.css',
  './bower_components/semantic/dist/components/icon.css',
  './bower_components/semantic/dist/components/sidebar.css',
  './bower_components/semantic/dist/components/transition.css'
  
]
})

export class AppComponent {

constructor(router: Router) {
  const navEndEvents = router.events.pipe(
    filter(event => event instanceof NavigationEnd),
  );
  navEndEvents.subscribe((event: NavigationEnd) => {
    gtag('config', 'UA-92954301-8', {
      'page_path': event.urlAfterRedirects
    });
  })
}

  title = 'WorldTelevision.tv';

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

}
