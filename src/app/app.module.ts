import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { OrganizationModule } from "./organization/organization.module";
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
    OrganizationModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
