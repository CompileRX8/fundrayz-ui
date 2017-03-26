import { NgModule } from '@angular/core';

import { OrganizationRoutingComponent } from './organization-routing.component';
import { SharedModule } from "../shared/shared.module";
import { OrganizationRoutingModule } from "./organization-routing.module";
import { OrganizationService } from './organization.service';
import { EventDetailComponent } from "./event/event-detail.component";
import { EventService } from "./event.service";
import { OrganizationListComponent } from "./organization/organization-list.component";
import { OrganizationDetailComponent } from "./organization/organization-detail.component";
import { EventListComponent } from "./event/event-list.component";
import { ItemListComponent } from "./item/item-list.component";
import { ItemService } from "./item.service";

@NgModule({
  imports: [
    SharedModule,
    OrganizationRoutingModule,
  ],
  declarations: [
    OrganizationRoutingComponent,
    OrganizationListComponent,
    OrganizationDetailComponent,
    EventDetailComponent,
    EventListComponent,
    ItemListComponent
  ],
  exports: [
    EventListComponent,
    ItemListComponent
  ],
  providers: [
    OrganizationService,
    EventService,
    ItemService
  ]
})
export class OrganizationsModule {
}
