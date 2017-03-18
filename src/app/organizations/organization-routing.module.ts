import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';
import { SharedModule } from '../shared/shared.module';
import { EventComponent } from "./event/event.component";
import { OrganizationListComponent } from "./organization/organization-list.component";

const organizationRoutes: Routes = [
  {
    path: 'organization',
    component: OrganizationListComponent,
    children: [
      { path: ':id', component: OrganizationComponent },
      { path: 'event/:id', component: EventComponent },
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(organizationRoutes)
  ]
})
export class OrganizationRoutingModule { }
