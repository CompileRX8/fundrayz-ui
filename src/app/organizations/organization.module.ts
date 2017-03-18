import { NgModule } from '@angular/core';

import { OrganizationComponent } from './organization/organization.component';
import { SharedModule } from "../shared/shared.module";
import { OrganizationRoutingModule } from "./organization-routing.module";
import { OrganizationService } from './organization/organization.service';
import { EventComponent } from "./event/event.component";
import { EventService } from "./event/event.service";
import { OrganizationListComponent } from "./organization/organization-list.component";

@NgModule({
  imports: [
    SharedModule,
    OrganizationRoutingModule,
  ],
  declarations: [
    OrganizationComponent,
    OrganizationListComponent,
    EventComponent
  ],
  exports: [
  ],
  providers: [
    OrganizationService,
    EventService
  ]
})
export class OrganizationsModule {}
