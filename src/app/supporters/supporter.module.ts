import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { SupporterRoutingModule } from './supporter-routing.module';
import { SupporterComponent } from './supporter/supporter.component';
import { SupporterService } from "./supporter.service";

@NgModule({
  imports: [
    SharedModule,
    SupporterRoutingModule,
  ],
  declarations: [
    SupporterComponent
  ],
  exports: [
  ],
  providers: [
    SupporterService
  ]
})
export class SupportersModule {}
