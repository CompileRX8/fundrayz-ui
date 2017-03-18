import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { OrganizationService, Organization } from './organization.service';
import { SupporterService, Supporter } from '../../supporters/supporter/supporter.service';
import { EventService, Event } from "../event/event.service";
import { ErrorService } from "../../core/error.service";
import { BreadcrumbService } from "../../core/navbar/breadcrumb.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-organization',
  templateUrl: 'organization.component.html'
})
export class OrganizationComponent implements OnInit {

  constructor(private organizationService: OrganizationService,
              private supporterService: SupporterService,
              private eventService: EventService,
              private errorService: ErrorService,
              private breadcrumbService: BreadcrumbService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  private organization: Organization;
  private supporters: Supporter[];
  private events: Event[];

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.organizationService.getById(+params[ 'id' ]))
      .subscribe((org: Organization) => {
        this.organization = org;

        this.supporterService.getByOrganization(org.id)
          .then((supporters) => this.supporters = supporters)
          .catch(this.errorService.handleError);

        this.eventService.getByOrganization(org.id)
          .then((events) => this.events = events)
          .catch(this.errorService.handleError);

        this.breadcrumbService.setToHomeBreadcrumb();
        this.breadcrumbService.addBreadcrumbs({ name: org.name, last: true, url: `organization/${org.id}` });
      });
  }
}
