import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrganizationModule } from '../organization/organization.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    OrganizationModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class HomeModule {}
