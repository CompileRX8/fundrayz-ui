import { NgModule } from '@angular/core';

import { OrganizationComponent } from './organization.component';
import { SharedModule } from "../shared/shared.module";
import { OrganizationRoutingModule } from "./organization-routing.module";
import { OrganizationService } from './organization.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    OrganizationRoutingModule,
  ],
  declarations: [
    OrganizationComponent
  ],
  exports: [
  ],
  providers: [
    OrganizationService
  ]
})
export class OrganizationModule {}
