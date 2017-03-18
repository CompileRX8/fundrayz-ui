import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SupporterComponent } from './supporter/supporter.component';

const supporterRoutes: Routes = [
  { path: 'supporter/:id', component: SupporterComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(supporterRoutes)
  ]
})
export class SupporterRoutingModule { }
