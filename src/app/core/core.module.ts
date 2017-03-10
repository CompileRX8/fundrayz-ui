import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoggerService } from './logger.service';
import { NavigationComponent } from './navbar/navigation.component';
import { AuthService } from './authentication/auth.service';
import { AuthConfigService } from './authentication/auth-config.service';
//import { SpinnerComponent } from './spinner/spinner.component';
//import { SpinnerService } from './spinner/spinner.service';
@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule,
  ],
  exports: [NavigationComponent], //, SpinnerComponent],
  declarations: [NavigationComponent], //, SpinnerComponent],
  providers: [AuthService, AuthConfigService, LoggerService] //, SpinnerService]
})
export class CoreModule { }
