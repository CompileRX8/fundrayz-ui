import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { EventService, Event } from './event.service';
import { OrganizationService, Organization } from '../../organizations/organization/organization.service';
import { ErrorService } from '../../core/error.service';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-event',
  templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private organizationService: OrganizationService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  private event: Event;
  private organization: Organization;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.eventService.getById(+params['id']))
      .subscribe((event: Event) => {
        this.event = event;

        this.organizationService.getById(event.orgId)
          .then((organization) => this.organization = organization)
          .catch(this.errorService.handleError);
      });
  }
}
