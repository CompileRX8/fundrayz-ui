import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrganizationRoutingComponent } from './organization-routing.component';
import { OrganizationListComponent } from "./organization/organization-list.component";
import { OrganizationDetailComponent } from "./organization/organization-detail.component";
import { EventDetailComponent } from "./event/event-detail.component";

const organizationRoutes: Routes = [
  {
    path: 'organization',
    component: OrganizationRoutingComponent,
    children: [
      { path: '', component: OrganizationListComponent },
      {
        path: ':orgId',
        component: OrganizationRoutingComponent,
        children: [
          { path: '', component: OrganizationDetailComponent },
          {
            path: 'event',
            component: OrganizationRoutingComponent,
            children: [
              {
                path: ':eventId',
                component: OrganizationRoutingComponent,
                children: [
                  { path: '', component: EventDetailComponent }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(organizationRoutes)
  ]
})
export class OrganizationRoutingModule {
}
