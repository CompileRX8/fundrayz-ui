import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService, Event } from '../event.service';
import { Organization, OrganizationService } from "../organization.service";
import { BreadcrumbService } from "../../core/navbar/breadcrumb.service";
import { ErrorService } from "../../core/error.service";
import { LoggerService } from "../../core/logger.service";
import { ItemService, Item } from "../item.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-item-list',
  templateUrl: 'item-list.component.html'
})
export class ItemListComponent implements OnInit {
  constructor(private itemService: ItemService,
              private organizationService: OrganizationService,
              private eventService: EventService,
              private breadcrumbService: BreadcrumbService,
              private route: ActivatedRoute) {
  }

  private organization: Organization;
  private event: Event;
  private items: Item[];

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        LoggerService.log("ItemListComponent: params = %s", JSON.stringify(params));
        let eventId = +params[ 'eventId' ];
        return this.eventService.getById(eventId);
      })
      .subscribe((event: Event) => {
        LoggerService.log("ItemListComponent: event = %s", JSON.stringify(event));
        this.event = event;

        this.organizationService.getById(event.orgId)
          .then((org) => this.organization = org)
          .catch(ErrorService.handleError);

        this.itemService.getByEvent(event.id)
          .then((items) => this.items = items)
          .catch(ErrorService.handleError);

//        this.breadcrumbService.changeBreadcrumb(this.route.snapshot, org.name);
      });
  }
}