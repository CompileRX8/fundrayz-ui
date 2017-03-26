import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { EventService, Event } from '../event.service';
import { OrganizationService, Organization } from '../organization.service';
import { ErrorService } from '../../core/error.service';
import { LoggerService } from "../../core/logger.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-event',
  templateUrl: 'event-detail.component.html'
})
export class EventDetailComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private organizationService: OrganizationService,
    private route: ActivatedRoute
  ) {}

  private event: Event;
  private organization: Organization;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        LoggerService.log("EventDetailComponent: params = %s", JSON.stringify(params));
        let orgId = +params['orgId'];
        let eventId = +params['eventId'];
        return this.eventService.getById(eventId);
      })
      .subscribe((event: Event) => {
        LoggerService.log("EventDetailComponent: event = %s", JSON.stringify(event));
        this.event = event;

        this.organizationService.getById(event.orgId)
          .then((organization) => this.organization = organization)
          .catch(ErrorService.handleError);
      });
  }
}
