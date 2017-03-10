import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { SharedModule } from '../shared/shared.module';

const organizationRoutes: Routes = [
  { path: 'organization/:id', component: OrganizationComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(organizationRoutes)
  ]
})
export class OrganizationRoutingModule { }
