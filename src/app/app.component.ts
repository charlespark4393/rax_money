import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

import { RoutePartsService } from './services/router-parts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appTitle = 'RAX.money';
  pageTitle = '';

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private routePartsService: RoutePartsService,
    private title: Title, private _location: Location) {
  }

  ngOnInit() {
    this.changePageTitle();
  }

  changePageTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((routeChange) => {
        const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
        if (!routeParts.length) {
          return this.title.setTitle(this.appTitle);
        }
        // Extract title from parts;
        this.pageTitle = routeParts
          .reverse()
          .map((part) => part.title)
          .reduce((partA, partI) => `${partA} > ${partI}`);
        this.pageTitle = `${this.appTitle} | ` + this.pageTitle;
        this.title.setTitle(this.pageTitle);
      });
  }

}
