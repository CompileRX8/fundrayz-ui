import { NgModule } from '@angular/core';

import { OrganizationComponent } from './organization.component';
import { SharedModule } from "../shared/shared.module";
import { OrganizationRoutingModule } from "./organization-routing.module";

@NgModule({
  imports: [
    OrganizationRoutingModule,
    SharedModule
  ],
  declarations: [
    OrganizationComponent
  ],
  exports: [
    OrganizationComponent
  ],
  providers: [
    // OrganizationService
  ]
})
export class OrganizationModule {}
