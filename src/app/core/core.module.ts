import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoggerService } from './logger.service';
import { NavigationComponent } from './navbar/navigation.component';
import { AuthService } from './authentication/auth.service';
import { AuthConfigService } from './authentication/auth-config.service';
import { ErrorService } from "./error.service";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { BreadcrumbComponent } from "./navbar/breadcrumb.component";
import { BreadcrumbService } from "./navbar/breadcrumb.service";

//import { SpinnerComponent } from './spinner/spinner.component';
//import { SpinnerService } from './spinner/spinner.service';
@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
],
  exports: [NavigationComponent, BreadcrumbComponent], //, SpinnerComponent],
  declarations: [NavigationComponent, BreadcrumbComponent], //, SpinnerComponent],
  providers: [AuthService, AuthConfigService, BreadcrumbService, LoggerService, ErrorService] //, SpinnerService]
})
export class CoreModule { }
