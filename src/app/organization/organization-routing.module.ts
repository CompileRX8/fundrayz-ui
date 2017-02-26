import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'organization', component: OrganizationComponent }
    ])
  ],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
