import { OnInit, Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export class Breadcrumb {
  name: string;
  last: boolean;
  url: string;
}

@Injectable()
export class BreadcrumbService implements OnInit {
  breadcrumbChange: EventEmitter<Breadcrumb[]> = new EventEmitter<Breadcrumb[]>(false);

  private breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  addBreadcrumbs(...breadcrumbs: Breadcrumb[]) {
    this.breadcrumbs.push(...breadcrumbs);
    this.sendUpdates();
  }

  clearBreadcrumbs() {
    this.breadcrumbs = [];
    this.sendUpdates();
  }

  setToHomeBreadcrumb() {
    this.clearBreadcrumbs();
    let homeBreadcrumb: Breadcrumb = {name: "Home", last: false, url: "/"};
    this.breadcrumbs.push(homeBreadcrumb);
    this.sendUpdates();
  }

  private sendUpdates() {
    this.breadcrumbChange.emit(this.breadcrumbs);
  }
}