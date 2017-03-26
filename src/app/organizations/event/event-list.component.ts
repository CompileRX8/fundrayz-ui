import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService, Event } from '../event.service';
import { Organization, OrganizationService } from "../organization.service";
import { BreadcrumbService } from "../../core/navbar/breadcrumb.service";
import { ErrorService } from "../../core/error.service";
import { LoggerService } from "../../core/logger.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-event-list',
  templateUrl: 'event-list.component.html'
})
export class EventListComponent implements OnInit {
  constructor(private organizationService: OrganizationService,
              private eventService: EventService,
              private breadcrumbService: BreadcrumbService,
              private route: ActivatedRoute) {
  }

  private organization: Organization;
  private events: Event[];

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        LoggerService.log("EventListComponent: params = %s, route = %s", JSON.stringify(params), this.route.snapshot.toString());
        let orgId = +params[ 'orgId' ];
        return this.organizationService.getById(orgId);
      })
      .subscribe((org: Organization) => {
        LoggerService.log("EventListComponent: org = %s", JSON.stringify(org));
        this.organization = org;

        this.eventService.getByOrganization(org.id)
          .then((events) => this.events = events)
          .catch(ErrorService.handleError);

//        this.breadcrumbService.changeBreadcrumb(this.route.snapshot, org.name);
      });
  }
}
