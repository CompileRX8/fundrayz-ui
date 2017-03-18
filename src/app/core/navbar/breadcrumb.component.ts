import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from './breadcrumb.service';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumbChange.subscribe((breadcrumbs) => this.breadcrumbs = breadcrumbs);
  }
}
