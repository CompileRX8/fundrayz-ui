import { OnInit, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RoutesRecognized, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Breadcrumb {
  name: string;
  last: boolean;
  url: string;
}

@Injectable()
export class BreadcrumbService implements OnInit {
  breadcrumbChange: BehaviorSubject<Breadcrumb[]>;

  private breadcrumbs: Breadcrumb[];

  constructor(private router: Router) {
    this.breadcrumbChange = new BehaviorSubject<Breadcrumb[]>([]);

    this.router.events.subscribe((routeEvent: RoutesRecognized) => {
        if(!(routeEvent instanceof RoutesRecognized)) return;

        let route = routeEvent.state.root;
        let url = "";

        this.breadcrumbs = [];

        while(route.children.length) {
          route = route.firstChild;
          if(!route.routeConfig.path) continue;

          url += `/${this.createUrl(route)}`;

          if(!route.data["breadcrumb"]) continue;

          this.breadcrumbs.push(this.createBreadcrumb(route, url));
        }
        this.breadcrumbChange.next(this.breadcrumbs);
    });
  }

  ngOnInit() {
  }

  public changeBreadcrumb(route: ActivatedRouteSnapshot, name: string) {
    let rootUrl = this.createRootUrl(route);
    let breadcrumb = this.breadcrumbs.find(bc => bc.url == rootUrl);

    breadcrumb.name = name;

    this.breadcrumbChange.next(this.breadcrumbs);
  }

  private createBreadcrumb(route: ActivatedRouteSnapshot, url: string): Breadcrumb {
    return {
      name: route.data["breadcrumb"],
      last: route.children.length === 0 || !route.firstChild.routeConfig.path,
      url: url
    }
  }

  private createUrl(route: ActivatedRouteSnapshot) {
    return route.url.map(s => s.toString()).join('/');
  }

  private createRootUrl(route: ActivatedRouteSnapshot) {
    let url = "";
    let next = route.root;

    while (next.firstChild !== route) {
      next = next.firstChild;
      if (!next.routeConfig.path) continue;

      url += `/${this.createUrl(next)}`;
    }

    url += `/${this.createUrl(route)}`;

    return url;
  }
}
